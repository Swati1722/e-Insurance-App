import React, {useState,useEffect} from 'react'
import Table from './CustomerTable'
import PageSize from '../Page/PageSize'
import PaginationOfApp from "../Page/PaginationOfApp"
import { getAllCustomer, deleteCustomer,updateActiveStatus } from '../../../Service/CustomerService'
import "./GetCustomer.css"

const GetCustomer = () => {
    const [pageSize,setPageSize] =useState(4)
  const [pageNumber, setPageNumber] = useState()
  const [numberOfPages, setNumberOfPages] = useState()
  const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
  const [data,setData] =useState([])

  
  const getCustomer = async() =>{
    try{
         let response =await getAllCustomer(pageNumber,pageSize)
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
    getCustomer()
  },[])

  
   useEffect(()=>{
    console.log("useEffect called")
    getCustomer()
  }, [totalNumberOfRecords,pageSize, pageNumber])

  const deleteUser = async(customerToBeDeleted, active) => {
    let username = customerToBeDeleted.username;
    if(active=="active")
    {
      let response = deleteCustomer(username);
    }
    else if(active=="inactive")
    {
      let response = updateActiveStatus(username);
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
      <div className='customer-detail-box'>
        <div  style={{textAlign:"center", marginTop:"1.5rem"}} className='customer-details-tittle'>
          <h1>Customer Details</h1>
        </div>
        <div className="customer-container">
            
            <div className='customer-left'>
              <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
            </div>
            
            
        </div>
      
          <div style={{  margin: '1rem', borderRadius:'20%'}} className="customer-table-container">
            {console.log(data)}
            <Table data={data} isDeleteButton={true}  deleteFunc={deleteUser}/>
          </div>
          <div className='customer-pagination'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getCustomer} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div>
      </div>
    
    
    
    
    
    </>
  )
}

export default GetCustomer
