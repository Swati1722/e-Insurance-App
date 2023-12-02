import React, {useState,useEffect} from 'react'
import Table from '../Table/Table'
import PageSize from '../Page/PageSize'
import PaginationOfApp from "../Page/PaginationOfApp"
import "./GetAgent.css"
import { getAllAgent } from '../../../Service/AgentService'


const GetAgent = () => {
    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])
  
    
    const getAgent = async() =>{
      try{
           let response =await getAllAgent(pageNumber,pageSize)
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
      getAgent()
    },[])
  
    
     useEffect(()=>{
      console.log("useEffect called")
      getAgent()
    }, [totalNumberOfRecords,pageSize, pageNumber])
  
  return (
    <>
        <div  style={{textAlign:"center", marginTop:"1.5rem"}}>
          <h1>Agent Details</h1>
        </div>
         <div className="agent-container">
            
            <div className='agent-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='agent-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getAgent} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
        </div>
      
          <div style={{  margin: '1rem'}} className="agent-table-container">
            {console.log(data)}
            <Table data={data} isDeleteButton={true}   />
          </div>
    
    
    
    
    </>
  )
}

export default GetAgent
