import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PageSize from '../../Shared/Page/PageSize'
import PaginationOfApp from '../../Shared/Page/PaginationOfApp'
import { getAllSchemes } from '../../../Service/SchemeService'
import Table from '../Table/SchemeTable/SchemeTable'
import "./EmployeeScheme.css"

const EmployeeScheme = () => {
    const location = useLocation();
    const receivedData = location.state || {};
  

    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])
    const [showAddSchemeModel, setShowAddSchemeModel] = useState(false)
    const [planId, setPlanId] = useState(receivedData.planId)
    

    
    const getScheme = async() =>{
        try{
             let response =await getAllSchemes(pageNumber,pageSize, receivedData.planId)
             console.log(response)
                if(response.data)
                {
                    setData(response.data)
                   
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
        getScheme()
    },[])
    useEffect(()=>{
        console.log("useEffect called")
        getScheme()
    }, [totalNumberOfRecords,pageSize, pageNumber])

  return (
    <>
        <div className='employee-scheme-details-box'>
            <div className ="employee-scheme-details-tittle"style={{textAlign:"center", marginTop:"1.5rem", background:"rgb(34, 52, 100)"}}>
                <h1>Scheme Details</h1>
            </div>
            <div className="employee-scheme-container">
                <div className='employee-scheme-left'>
                    <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
                </div>
                
            </div>
        
            <div style={{  margin: '1rem'}} className="plan-table-container">
             
                <Table data={data}   />
            </div>
            <div className='scheme-right'>
                <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getScheme} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
               
        </div>
        <div></div>

    </>
  )
}

export default EmployeeScheme