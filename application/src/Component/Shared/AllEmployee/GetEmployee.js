import React, {useState,useEffect} from 'react'
import Table from '../Table/Table'
import PageSize from '../Page/PageSize'
import PaginationOfApp from "../Page/PaginationOfApp"
import { getAllEmployee } from '../../../Service/EmployeeService'

const GetEmployee = () => {
    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])

    const getEmployee = async() =>{
        try{
             let response =await getAllEmployee(pageNumber,pageSize)
             console.log(response)
                if(response.data)
                {
                    setData(response.data)
                    console.log(response.data)
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
        console.log("useEffect called")
        getEmployee()
      }, [totalNumberOfRecords,pageSize, pageNumber])
    
      


  return (
    <>
     
     <div  style={{textAlign:"center", marginTop:"1.5rem"}}>
          <h1>Employee Details</h1>
        </div>
        <div className="b-container">
            
            <div className='b-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            <div className='b-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getEmployee} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
            
        </div>
      
          <div style={{  margin: '1rem', borderRadius:'20%'}} className="employee-table-container">
            {console.log(data)}
            <Table data={data} />
          </div>
    
    
    </>
  )
}

export default GetEmployee
