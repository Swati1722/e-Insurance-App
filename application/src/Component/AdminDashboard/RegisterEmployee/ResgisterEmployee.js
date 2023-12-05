import React, { useState } from 'react'
import image from "../../../Image/Register.svg"
import { addEmployee } from '../../../Service/EmployeeService'
import "./RegisterEmployee.css"

const ResgisterEmployee = () => {
    const[firstName, setFirstName] = useState()
    const[lastName, setLastName] = useState()
    const[userName,setUserName] = useState()
    const[password, setPassword] = useState()
    const[email,setEmail] = useState()
    const[salary,setSalary]=useState()
    const[mobileNumber,setMobileNumber] = useState()
    const[dateOfBirth,setDateOfBirth] = useState()


    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    };

    

    const isPasswordValid = (password) => {
        return password.length >= 6;
    };

    const AddEmployees = async() =>{

        if (!firstName|| !lastName || !userName || !password ||  !email || !salary || !mobileNumber || !dateOfBirth) {
            alert('Please fill in all required fields.');
            return;
        } else if (!firstName) {
            alert('Please fill Name.');
            return;
        } else if (!lastName) {
            alert('Please fill Name.');
            return;
        }
        else if (!userName) {
            alert('Please fill User Name.');
            return;
        } else if (!password) {
            alert('Please fill password (min 6 characters).');
            return;
        } else if (!isPasswordValid(password)) {
            alert('Password must be at least 6 characters long.');
            return;
        } else if (!email) {
            alert('Please fill email (valid format).');
            return;
        } else if (!isEmailValid(email)) {
            alert('Please enter a valid email address.');
            return;
        }else if (!salary) {
            alert('Please enter a valid Salary .');
            return;
        }else if (!mobileNumber) {
            alert('Please enter a valid mobileNumber .');
            return;
        }else if (!dateOfBirth) {
            alert('Please enter a valid Date Of Birth .');
            return;
        }


        try{
            let response = await addEmployee(firstName, lastName,userName,password,email,salary,mobileNumber,dateOfBirth)
            // console.log(response)
            setFirstName('');
            setLastName('');
            setUserName('');
            setPassword('');
            setEmail('');
            if(response)
            {
                    alert("Employee is added successfully")
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
          <div className='register-employee-container'>
            <div class="register-employee-left-element">
                <img style ={{ height:"100vh", width:"80vh", paddingLeft:"1rem" }} src={image} alt="Phone image"/>
            </div>

            
            <div className="register-employee-right-element">
                <div className='register-employee-box'>
                    <h1 className='register-employee-heading' >Register Employee </h1>
                    {/* <div className="n-blur" style={{ background: "rgb(238 210 255)" }}></div> */}
                    <form className ='register-employee-postdata' >
                        <div className='register-employee-form-group'>
                            <label htmlFor="FirstName" style ={{ marginRight:"49px"}} > First Name:</label>
                            <input type="text" className="register-employee-form-control" id="firstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className='register-employee-form-group'>
                            <label htmlFor="lastName" style ={{ marginRight:"49px"}} > Last Name:</label>
                            <input type="text" className="register-employee-form-control" id="lastName"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className='register-employee-form-group'>
                            <label htmlFor="userName" style ={{ marginRight:'49px'}} > UserName:</label>
                            <input type="text" className="register-employee-form-control" id="userName"  value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div>

                        
                        <div className='register-employee-form-group'>
                            <label htmlFor="password" style ={{ marginRight:"56px"}} > Password:</label>
                            <input type="password" className="register-employee-form-control" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    
                        </div>
                        <div className='register-employee-form-group'>
                            <label htmlFor="email" style ={{ marginRight:"87px"}} > Email:</label>
                            <input type="email" className="register-employee-form-control" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='register-employee-form-group'>
                            <label htmlFor="salary" style ={{ marginRight:"84px"}} > Salary:</label>
                            <input type="text" className="register-employee-form-control" id="salary"  value={salary} onChange={(e) => setSalary(e.target.value)}/>
                        </div>
                        <div className='register-employee-form-group'>
                            <label htmlFor="mobileNumber" style ={{ marginRight:"15px"}} > MobileNumber:</label>
                            <input type="mobileNumber" className="register-employee-form-control" id=""  value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
                        </div>
                        <div className='register-employee-form-group'>
                            <label htmlFor="dateOfBirth" style ={{ marginRight:"40px"}} > DateOfBirth:</label>
                            <input type="date" className="register-employee-form-control" id="dateOfBirth"  value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                        </div>
                        <div className='register-employee-button-group'>
                            <button type="button" className="btn btn-primary register-employee-button" onClick={ AddEmployees}>register-employee</button>
                        </div>
                        
                                
                    </form>
                    </div>
                </div>
            </div>
   
   
   
   
   </>
  )
}

export default ResgisterEmployee
