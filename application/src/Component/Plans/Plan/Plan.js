import React, {useState,useEffect} from 'react'
import PageSize from '../../Shared/Page/PageSize'
import PaginationOfApp from '../../Shared/Page/PaginationOfApp'
import Table from "../../Shared/Table/Table"
import { getAllPlans } from '../../../Service/PlanService'
import "./Plan.css"

const Plan = () => {
    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])
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

  return (
    <>
        <div style={{textAlign:"center", marginTop:"1.5rem"}}>

            <h1>Plans Details</h1>
        </div>
        <div className="plan-container">
            
            <div className='plan-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='plan-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getPlan} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
        </div>
      
          <div style={{  margin: '1rem'}} className="plan-table-container">
            {console.log(data)}
            <Table data={data}  isDeleteButton={true} isSchemeButton ={true} />
          </div>
    
    
    
    </>
  )
}

export default Plan
