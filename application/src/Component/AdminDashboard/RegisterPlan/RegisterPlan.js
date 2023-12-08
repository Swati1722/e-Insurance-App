import React, {useState} from 'react'
import image from "../../../Image/AddIdea.svg"
import "./RegisterPlan.css"
import { addPlan } from '../../../Service/PlanService'

const RegisterPlan = () => {
    const[planName, setPlanName] = useState()
    const[planDetails, setPlanDetails] = useState()

    const registerNewPlan = async() =>{
        try{
             let response =await addPlan(planName,planDetails)
             console.log(response)
        }
        catch(error)
        {
            console.log(error)
            alert(error.message)
        }
    }
   
  return (
    <>
         <div className='register-plan-container'>
            <div class="register-plan-left-element">
                <img style ={{ height:"82vh", width:"55vh", paddingLeft:"1rem"}} src={image} alt="Phone image"/>
            </div>

            
            <div className="register-plan-right-element">
                <div className='register-plan-box'>
                    <h1 className='register-plan-heading'>Register Plan </h1>
                    {/* <div className="n-blur" style={{ background: "rgb(238 210 255)" }}></div> */}
                    <form className ='register-plan-postdata' >
                        <div className='register-plan-form-group'>
                            <label htmlFor="PlanName" style ={{ marginRight:"10px"}} > Plan Name:</label>
                            <input type="text" className="register-plan-form-control-1" id="planName"  value={planName} onChange={(e) => setPlanName(e.target.value)}/>
                        </div>
                        <div className='register-plan-form-group'>
                            <label htmlFor="planDetails" style ={{ marginRight:"13px"}} >Plan Details:</label>
                            <input type="text" className="register-plan-form-control-2" id="planDetails"  value={planDetails} onChange={(e) => setPlanDetails(e.target.value)}/>
                        </div>
                       
                        <div className='register-plan-button-group' style={{marginTop:"1rem"}}>
                            <button type="button" className="btn btn-primary register-plan-button" onClick={registerNewPlan}>Register</button>
                        </div>
                        
                                
                    </form>
                    </div>
                </div>
            </div>
   
   
    
    
    </>
  )
}

export default RegisterPlan
