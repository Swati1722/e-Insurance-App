import React, {useState, useEffect} from 'react'
import { validateUser as validate } from '../../../Service/Authentication';
import { GetAllQuery } from '../../../Service/QueryService';
import PageSize from '../../Shared/Page/PageSize'
import PaginationOfApp from '../../Shared/Page/PaginationOfApp'
import Table from '../Table/QueryTable/Table'
import { useLocation } from 'react-router-dom';
import "./AllQuery.css"

const AllQuery = () => {
    const location = useLocation();
    const [data,setData] =useState([])
    
   const receivedData = location.state || {};
   
   const getAllQuery = async() =>{
    try{
      console.log(receivedData.username)
      let response =await  GetAllQuery(receivedData.username)
      console.log(response)
      if(response)
      {
        setData(response.data)
      }
    }
    catch(error)
    {
      console.log(error)
      alert(error)
    }
  }
  useEffect(()=>{
    getAllQuery()
    
  },[])
   
   
  

  return (
    <>
        <div className='query-box'>
            <div className='query-tittle'>
                <h1>Questions</h1>
            </div>
          
            <div>
                {data.content &&
                  data.content.map((item) => (
                    <div key={item.id}  style={{ display: 'flex', flexDirection:"column"}}>
                      
                      <p><b>Question:</b>&nbsp;{item.question}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                      <p><b>Answer:</b>&nbsp;{item.answer || 'Not answered yet'}</p>
                      <hr style={{margin:".2rem"}}/>
                    </div>
                  ))}
            </div>
           
            
        </div>
    </>
  )
}

export default AllQuery
