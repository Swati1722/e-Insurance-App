import React, {useState,useEffect} from 'react'
import PageSize from '../../Shared/Page/PageSize'
import PaginationOfApp from '../../Shared/Page/PaginationOfApp'
import Table from "../Table/PlanTable"
import SchemeTable from '../Table/SchemeTable'
import { getAllPlans } from '../../../Service/PlanService'
import { getAllSchemes } from '../../../Service/SchemeService'
import "./Plan.css"
import PolicyModel from '../../Scheme/PolicyModel/PolicyModel'
import Footer from '../../Shared/Footer/Footer'

const Plan = () => {
    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])
    const [openSchemeTable,setOpenSchemeTable] = useState();
    const [scheme, setScheme] =useState()
    const [showSchemeDetailsModal, setShowSchemeDetailsModal] = useState(false);
    const [schemeId, setSchemeId] = useState()
    const [particularScheme,setparticularScheme] =useState()

    const getPlan = async() =>{
        try{
             let response =await getAllPlans(pageNumber,pageSize)
             console.log(response)
                if(response.data)
                {
                    setData(response.data)
                    // console.log(response.data)
                }
          
            let totalNumberOfRecords = response.headers['x-total-count']
            setTotalNumberOfRecord(totalNumberOfRecords)
            setNumberOfPages(Math.ceil(totalNumberOfRecords /pageSize))
           
        }
          catch(error)
          {
            console.log(error)
              alert(error.message)
          }
       }
       
       useEffect(()=>{
        getPlan()
      },[])
    
      
       useEffect(()=>{
        console.log("useEffect called")
        getPlan()
      }, [totalNumberOfRecords,pageSize, pageNumber])

      const SchemeFunc = async(value,isSchemeButton) =>{
      
        try{
            console.log(value.planId)
             let response =await getAllSchemes(pageNumber,pageSize,value.planId)
             console.log(response)
                if(response.data)
                {
                    setScheme(response.data)
                    setOpenSchemeTable(true);
                    // console.log(response.data)
                }
           
        }
          catch(error)
          {
            console.log(error)
              alert(error.message)
          }
       }
       const closeSchemeTable = () => {
        setOpenSchemeTable(false);
      };
      
      const calculateFunc =(value) =>{
        setSchemeId(value.schemeId)
        setparticularScheme(value)
        togglePlanDetails()
      }
      const togglePlanDetails = () => {
        setShowSchemeDetailsModal(!showSchemeDetailsModal);
      };
          

  return (
    <>
      <div className='plan-details-box'>
        
            <div className ="plan-details-tittle"style={{textAlign:"center", marginTop:"1.5rem", background:"rgb(34, 52, 100)"}}>

                <h1>Plans Details</h1>
            </div>
            <div className="plan-container">
                
                <div className='plan-left'>
                  <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
                </div>
              
                
            </div>
          
              <div style={{  margin: '1rem'}} className="plan-table-container">
                {console.log(data)}
                <Table data={data}  isDeleteButton={true} isSchemeButton ={true} SchemeFunc={SchemeFunc} />
              </div>
              <div className='plan-right'>
                  <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getPlan} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
                </div> 
              
        
            
            {openSchemeTable && (
              <>
                <h2 style={{ textAlign: "center", color: "white", background: "rgb(34, 52, 100)", padding: "1rem" }}>Scheme Details</h2>
                <button onClick={closeSchemeTable} style={{ marginBottom: "1%", marginLeft: '89%', backgroundColor: 'rgb(34, 52, 100)', color: 'white', height:"1.7rem"}}>Close Table</button>
              </>
            )}
            <div style={{ marginRight:'1rem', borderRadius: '20%', marginLeft:'1rem' }}>
              {openSchemeTable && <SchemeTable  data={scheme} isCalculateButton={true} CalculateFunc ={calculateFunc}  />}
            </div>

            <div>
              {showSchemeDetailsModal && (
                  <PolicyModel showDetailsModal={showSchemeDetailsModal} togglePlanDetails={ togglePlanDetails} data={particularScheme} schemeId={schemeId}/>
                  )}

            </div>

            
        </div>
        <div>
            <Footer/>
          </div>

    
    
    </>
  )
}

export default Plan
