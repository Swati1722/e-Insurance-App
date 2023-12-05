import React, {useState,useEffect} from 'react'
import Table from './EmployeeTable'
import PageSize from '../Page/PageSize'
import PaginationOfApp from "../Page/PaginationOfApp"
import { getAllEmployee } from '../../../Service/EmployeeService'
import "./GetEmployee.css"

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
    
      
      const deleteUser = async(customerToBeDeleted, active) => {
        let username = customerToBeDeleted.username;
        if(active=="active")
        {
          // let response = deleteCustomer(username);
        }
        else if(active=="inactive")
        {
          // let response = updateActiveStatus(username);
        }
    
    
        // let resp = await deleteBank(bankId)
        // if(resp)
        // {
        //     alert(" is deleted successfully")
        // }
        // console.log(resp) 
      }


  return (
    <>
      <div className='employee-details-box'>
     
        <div  style={{textAlign:"center", marginTop:"1.5rem"}} className='employee-details-tittle'>
          <h1>Employee Details</h1>
        </div>
        <div className="employee-container">
            
            <div className='employee-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
           
            
        </div>
      
          <div style={{  margin: '1rem', borderRadius:'20%'}} className="employee-table-container">
           
            <Table data={data}  isDeleteButton={true}  deleteFunc={deleteUser}/>
          </div>
          <div className='employee-right'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getEmployee} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
          </div> 
      </div>
    
    
    </>
  )
}

export default GetEmployee
