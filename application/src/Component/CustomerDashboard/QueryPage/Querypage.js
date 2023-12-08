import React, { useState,useEffect } from 'react'
import image from '../../../Image/Questions.svg'
import "./QueryPage.css"
import { useNavigate } from 'react-router-dom';
import { validateUser as validate } from '../../../Service/Authentication';
import { addQuery } from '../../../Service/QueryService';

const Querypage = () => {
    const navigate=new useNavigate();
    const [query, setQuery] =useState();
    const [data,setData] = useState()
    const [username, setUsername] = useState()


    const validateUser = async() =>{
        const authToken = localStorage.getItem('authentication')
        let resp = await validate(authToken)
        console.log(resp)
        if(resp)
        {
            setData(resp)
        }

     }
     useEffect(()=>{
        validateUser()
      },[])

   
    const toggleAllQuery = () => {
       
        const dataToSend = {
            username:data.data.sub,
        }
        navigate('/customerDashboard/query',  { state: dataToSend });
    }
    
    const submitquestion =async() =>{
        try{
          
        let resp = await addQuery(query,data.data.sub)
        if(resp)
        {
            alert("Query is sended")
        }
        }
         catch(error)
        {
            console.log(error)
            alert(error)
            // alert("Wrong Username Or Password")
        }
    }

    

  return (
        <>
           <div className='query-container'>
                <div className="query-top-element">
                    <img style={{ height: "45vh", width: "50vh" }} src={image} alt="Query image" />
                </div>

                <div className="query-bottom-element">
                    <div className='query-box'>
                    <h1 className='query-heading'>Query Submission </h1>
                    <form className='query-postdata'>
                        <div className='query-form-group'>
                            <label htmlFor="query"> Enter Your Query</label>
                            <input type="text" className="form-control" id="query" value ={query}  onChange={(e) => setQuery(e.target.value)}/>
                        </div>

                        <div className='query-button' style={{marginTop:"1rem"}}>
                            <button type="button" className="btn btn-primary query-button"  onClick={submitquestion}>Submit</button>
                            <button type="button" className="btn btn-primary query-button" style={{marginLeft:"12rem"}} onClick={toggleAllQuery}>All Query</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            {/* value={userQuery} onChange={(e) => setUserQuery(e.target.value)}  */}
            {/* onClick={submitQuery} */}

        </>
  )
}

export default Querypage
