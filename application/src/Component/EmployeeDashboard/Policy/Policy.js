import React, {useState,useEffect}  from 'react'
import PageSize from '../../Shared/Page/PageSize'
import PaginationOfApp from '../../Shared/Page/PaginationOfApp'
import Table from '../Table/PolicyTable/Table'
import {getAllPolicy, getDocument} from '../../../Service/PolicyService'
import "./Policy.css"

const Policy = () => {
    const [pageSize,setPageSize] =useState(4)
    const [pageNumber, setPageNumber] = useState()
    const [numberOfPages, setNumberOfPages] = useState()
    const [totalNumberOfRecords, setTotalNumberOfRecord] = useState()
    const [data,setData] =useState([])


    const getPolicy = async() =>{
        try{
           
             let response =await getAllPolicy(pageNumber,pageSize)
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
        getPolicy()
      },[])
    
      
       useEffect(()=>{
        console.log("useEffect called")
        getPolicy()
      }, [totalNumberOfRecords,pageSize, pageNumber])

      const viewDocFunc = async(value) =>{
        try{
            let response = getDocument(value.policyNumber)
            }
            catch(error)
            {
                console.log(error)
                alert(error.message)
            }

      }



  return (
    <>
        <div className='policy-details-box'>
            <div className ="policy-details-tittle"style={{textAlign:"center", marginTop:"1.5rem", background:"rgb(34, 52, 100)"}}>
                <h1>Plans Details</h1>
            </div>
            <div className="policy-container">
                <div className='policy-left'>
                    <PageSize  pageSize={pageSize} setPageSize={setPageSize}  setNumberOfPages={setNumberOfPages}  totalNumberOfRecords={totalNumberOfRecords} />
                </div>
               
            </div>
        
            <div style={{  margin: '1rem'}} className="plan-table-container">
                {console.log(data)}
                <Table data={data} isVerifyButton={true} isViewDocumentButton={true} viewDocFunc={viewDocFunc} />
            </div>
            <div className='plan-right'>
                <PaginationOfApp numberOfPages={numberOfPages} getFunction ={getPolicy} pageNumber={pageNumber} setPageNumber ={setPageNumber}/>
            </div> 
               
        </div>
        
    
    
    </>
  )
}

export default Policy
