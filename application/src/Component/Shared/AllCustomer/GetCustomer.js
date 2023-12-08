import React, {useState,useEffect} from 'react'
import Table from './CustomerTable'
import PageSize from '../Page/PageSize'
import PaginationOfApp from "../Page/PaginationOfApp"
import { getAllCustomer, deleteCustomer,updateActiveStatus } from '../../../Service/CustomerService'
import "./GetCustomer.css"
import SearchBar from './SearchBar'; 

const GetCustomer = () => {
  const [pageSize,setPageSize] =useState(4)
  const [pageNumber, setPageNumber] = useState()
  const [numberOfPages, setNumberOfPages] = useState()
  const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
  const [data,setData] =useState([])
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredData, setFilteredData] = useState([]);
  

  
  const getCustomer = async() =>{
    try{
         let response =await getAllCustomer(pageNumber,pageSize)
         console.log(response)
            if(response.data)
            {
                setData(response.data)
               
            }
      
        let totalNumberOfRecords = response.headers['x-total-count']
        setTotalNumberOfRecord(totalNumberOfRecords)
        setNumberOfPages(Math.ceil(totalNumberOfRecords /pageSize))
    //     const updatedFilteredData = Array.isArray(data)
    //   ? data.filter((customer) =>
    //       customer.username.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //   : [];

    // setFilteredData(updatedFilteredData);
       
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
            {/* <div className="mb-3 d-flex align-items-center"> */}
              {/* <label className="mr-2">Search:</label> */}
              {/* Render the SearchBar component */}
              {/* <SearchBar searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}
            {/* </div>    */}
        </div>
      
          <div style={{  margin: '1rem', borderRadius:'20%'}} className="customer-table-container">
            {console.log(data)}
            <Table data={data} isDeleteButton={true}  deleteFunc={deleteUser} searchTerm/>
          </div>
          <div className='customer-pagination'>
              <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getCustomer} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div>
      </div>
    </>
  )
}

export default GetCustomer
