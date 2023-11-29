import React from 'react'

const ResgisterEmployee = () => {
  return (
   <>
          <div className='register-container'>
            <div class="register-left-element">
                <img style ={{ height:"80vh", width:"70vh", paddingLeft:"1rem"}} src={image} alt="Phone image"/>
            </div>

            
            <div className="register-right-element">
                <div className='register-box'>
                    <h1 className='register-heading'>Register </h1>
                    {/* <div className="n-blur" style={{ background: "rgb(238 210 255)" }}></div> */}
                    <form className ='register-postdata' >
                        <div className='register-form-group'>
                            <label htmlFor="FirstName" style ={{ marginRight:"12px"}} > First Name:</label>
                            <input type="text" className="register-form-control" id="firstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className='register-form-group'>
                            <label htmlFor="lastName" style ={{ marginRight:"13px"}} > Last Name:</label>
                            <input type="text" className="register-form-control" id="lastName"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className='register-form-group'>
                            <label htmlFor="userName" style ={{ marginRight:"14px"}} > UserName:</label>
                            <input type="text" className="register-form-control" id="userName"  value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div>

                        
                        <div className='register-form-group'>
                            <label htmlFor="password" style ={{ marginRight:"22px"}} > Password:</label>
                            <input type="password" className="register-form-control" id="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    
                        </div>
                        <div className='register-form-group'>
                            <label htmlFor="email" style ={{ marginRight:"50px"}} > Email:</label>
                            <input type="email" className="register-form-control" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='register-button-group'>
                            <button type="button" className="btn btn-primary register-button" onClick={ AddCustomers}>Register</button>
                        </div>
                        
                                
                    </form>
                    </div>
                </div>
            </div>
   
   
   
   
   </>
  )
}

export default ResgisterEmployee
