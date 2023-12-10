import React, {useState, useEffect} from 'react'
import { FindAllQuery } from '../../../Service/QueryService'
import { SaveQueryAnswer } from '../../../Service/QueryService'

const Query = () => {
  const [data,setData] =useState([])
  const [answers, setAnswers] = useState({});

  const getAllQuery = async() =>{
    try{
     
      let response =await  FindAllQuery()
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

  const handleAnswerChange = async(questionId, event) => {
  try{
      const newAnswers = { ...answers, [questionId]: event.target.value };
      setAnswers(newAnswers);

        let response =await  SaveQueryAnswer(questionId, answers)
        console.log(response)
        
    }
    catch(error)
    {
      console.log(error)
      alert(error)
    }
  };
   
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
                      <label>
                        <b>Answer:</b>&nbsp;
                        <input
                          type="text"
                          value={answers[item.id] || ''}
                          onChange={(e) => setAnswers(e.target.value)}
                        />
                      </label>
                      <button onClick={handleAnswerChange(item.id)} >
                        Submit Answers
                      </button>
                      <hr style={{margin:".2rem"}}/>
                    </div>
                  ))}
            </div>
           
            
        </div>

    
    
    </>
  )
}

export default Query
