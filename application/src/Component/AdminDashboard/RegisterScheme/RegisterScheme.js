import React, {useState} from 'react'
import "./RegisterScheme.css"
import image from "../../../Image/AddIdea.svg"
import { addScheme } from '../../../Service/SchemeService'
import { useNavigate } from 'react-router-dom';

const RegisterScheme = ({planId}) => {
    const[schemeName, setSchemeName] = useState()
    const[minAmount, setMinAmount] = useState()
    const[maxAmount, setMaxAmount] = useState()
    const[minAge,setMinAge] = useState()
    const[maxAge,setMaxAge] =useState()
    const[minTime, setMinTime] = useState()
    const[maxTime, setMaxTime] = useState()
    const[profitRatio, setProfitRatio] = useState()
    const [totalCommission, setTotalCommission] = useState('');
    const navigate = useNavigate();


    const registerNewScheme = async() =>{
        console.log(planId)
        try{
             let response =await addScheme(planId, schemeName, minAmount, maxAmount, minAge,maxAge,minTime,maxTime,profitRatio,totalCommission)
             if(response)
             {
                alert("Scheme is Added")
                navigate(-1); 
             }
        }
        catch(error)
        {
            console.log(error)
            alert(error.message)
        }
    }

  return (
    <>
        <div className='register-scheme-container'>
            <div class="register-scheme-left-element">
                <img style ={{ height:"115vh", width:"78vh", paddingLeft:"1rem"}} src={image} alt="Phone image"/>
            </div>
            <div className="register-scheme-right-element">
                <div className='register-scheme-box'>
                    <h1 className='register-scheme-heading'>Register Scheme </h1>
                     <form className ='register-scheme-postdata' >
                        <div className='register-scheme-form-group'>
                            <label htmlFor="SchemeName" style ={{ marginRight:"35px"}} > Scheme Name :</label>
                            <input type="text" className="register-scheme-form-control" id="schemeName"  value={schemeName} onChange={(e) => setSchemeName(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="minAmount" style ={{ marginRight:"51px"}} >MinAmount :</label>
                            <input type="text" className="register-scheme-form-control" id="minAmount"  value={minAmount} onChange={(e) => setMinAmount(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="maxAmount" style ={{ marginRight:"47px"}} >MaxAmount :</label>
                            <input type="text" className="register-scheme-form-control" id="maxAmount"  value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="minAge" style ={{ marginRight:"81px"}} >MinAge :</label>
                            <input type="text" className="register-scheme-form-control" id="maxAge"  value={minAge} onChange={(e) => setMinAge(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="maxAge" style ={{ marginRight:"79px"}} >MaxAge :</label>
                            <input type="text" className="register-scheme-form-control" id="maxAmount"  value={maxAge} onChange={(e) => setMaxAge(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="minTime" style ={{ marginRight:"75px"}} >MinTime :</label>
                            <input type="text" className="register-scheme-form-control" id="minTime"  value={minTime} onChange={(e) => setMinTime(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="maxTime" style ={{ marginRight:"73px"}} >MaxTime :</label>
                            <input type="text" className="register-scheme-form-control" id="maxTime"  value={maxTime} onChange={(e) => setMaxTime(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="profitRatio" style ={{ marginRight:"60px"}} >Profit Ratio:</label>
                            <input type="text" className="register-scheme-form-control" id="profitRatio"  value={profitRatio} onChange={(e) => setProfitRatio(e.target.value)}/>
                        </div>
                        <div className='register-scheme-form-group'>
                            <label htmlFor="totalCommission" style={{ marginRight: "10px" }}> AgentCommission:</label>
                            <input type="text" className="register-agent-form-control" id="totalCommission" value={totalCommission} onChange={(e) => setTotalCommission(e.target.value)} />
                        </div>
                       
                        <div className='register-scheme-button-group' style={{marginTop:"1rem"}}>
                            <button type="button" className="btn btn-primary register-scheme-button"  onClick={registerNewScheme}>Register</button>
                        </div>
                        
                                
                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default RegisterScheme
