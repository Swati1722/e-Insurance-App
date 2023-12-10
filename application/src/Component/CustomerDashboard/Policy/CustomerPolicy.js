import React, {useState,useEffect}  from 'react'
import PageSize from '../../Shared/Page/PageSize'
import PaginationOfApp from '../../Shared/Page/PaginationOfApp'
import Table from '../Table/PolicyTable/PolicyTable'
import { getAllPolicyByUsername } from '../../../Service/PolicyService'
import { validateUser } from '../../../Service/Authentication';


const CustomerPolicy = () => {
    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])


    const getPolicy = async() =>{
        try{
            const authToken = localStorage.getItem('authentication')
            let resp = await validateUser(authToken)
         
             let response =await getAllPolicyByUsername(pageNumber,pageSize,resp.data.sub)
             console.log(response)
            if(response.data){
                    setData(response.data)
                }
          console.log('recode',response.headers['x-total-count'])
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
        getPolicy()
      },[])
    

  return (
    <>
        <div className='policy-details-box'>
            <div className ="policy-details-tittle"style={{textAlign:"center", marginTop:"1.5rem", background:"rgb(34, 52, 100)"}}>
                <h1>Policy Details</h1>
            </div>
            <div className="policy-container">
                <div className='policy-left'>
                    <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
                </div>
                
            </div>
        
            <div style={{  margin: '1rem'}} className="plan-table-container">
            
                <Table data={data} isPaymentButton={true} isDeleteButton={true}  />
            </div>
            <div className='plan-right'>
                <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getPolicy} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
               
        </div>
        
    
    
    </>
  )
}

export default CustomerPolicy
