import React, {useState, useEffect} from 'react'
import { validateUser as validate } from '../../../Service/Authentication';
import { GetAllQuery } from '../../../Service/QueryService';

import { useLocation } from 'react-router-dom';

const AllQuery = () => {
    const [questions, setQuestions] = useState([]);
    const [showAnswered, setShowAnswered] = useState(false);
    const location = useLocation();
    const receivedData = location.state || {};
   
   const getAllQuery = async() =>{
    try{
      console.log(receivedData.username)
      let response =await  GetAllQuery(receivedData.username)
      console.log(response)
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
        <div className='query-container'>
            <div className='query-box'>
                <div className='query-question'> 
                  <div>
                    <h2>Questions</h2>
                    
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AllQuery
