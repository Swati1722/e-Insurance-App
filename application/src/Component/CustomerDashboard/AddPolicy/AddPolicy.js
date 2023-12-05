import React from 'react'
import { useLocation } from 'react-router-dom';
import {savePolicy} from "../../../Service/PolicyService"
import './AddPolicy.css'

import { Link } from 'react-router-dom';

const AddPolicy = () => {
  const location = useLocation();
  const receivedData = location.state || {};

  const storePolicyData = async() =>{
    let respose = await savePolicy(receivedData.noOfYear,receivedData.totalInvestmentAmount, receivedData.premiumType,receivedData.installmentAmount,receivedData.interestAmount,receivedData.totalAmount)

  }

  return (
    <>
        <div className='plan-box'>
            <div className='plan-tittle'>

                <h1>Policy Details Form</h1>
            </div>
            <div className='plan-form-container'>
                <form className='plan-form-controlller'>
                {/* <p>Number of Years: {receivedData.noOfYear}</p>
                <p>Received data: {JSON.stringify(receivedData)} <h1></h1></p> */}
                    <div className="plan-form-row">
                        <div className="form-group">
                            <label for="inputEmail4">Mobile</label>
                            <input type="Mobile" className="form-control" id="inputEmail" placeholder="Mobile"/>
                        </div>
                        <div className="form-group">
                            <label for="dataOfBirth">Date Of Birth</label>
                            <input type="dataOfBirth" className="form-control" id="dataOfBirth" placeholder="dataOfBirth"/>
                        </div>
                
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                        </div>
                        <div className="form-group">
                            <label for="noOfYear">Number Of Year</label>
                            <input type="text" className="form-control" id="noOfYear" placeholder="Number Of Year"/>
                        </div>
                    
                
                        
                        <div className="form-group ">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control" size="5">
                                <option selected>Choose...</option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>
                                <option>Andaman and Nicobar Islands</option>
                                <option>Chandigarh</option>
                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                <option>Delhi</option>
                                <option>Lakshadweep</option>
                                <option>Puducherry</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group ">
                            <label for="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                

                
                        <div className='form-group'>
                            <label htmlFor="noOfYear">Number of year*</label>
                            <input
                    
                                type="text"
                                className="form-control"
                                id="noOfYear"
                                value={receivedData.noOfYear}
                                // onChange={(e) => setNoOfYear(e.target.value)}
                            
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="totalInvestmentAmount">Total Investment Amount *</label>
                            <input
                                
                                type="text"
                                className="form-control"
                                id="totalInvestmentAmount"
                                value={receivedData.totalInvestmentAmount}
                            
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="premiumType">Premium Type *</label>
                            <input
                                
                                type="text"
                                className="form-control"
                                id="premiumType"
                                value={receivedData.premiumType}
                            
                                required
                            />
                        </div>
                        <div className='investment-form-group'>
                            <label htmlFor="installmentAmount">Installment Amount*</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="installmentAmount"
                                value={receivedData.installmentAmount}
                                
                            
                                required
                            />
                        </div>
                        <div className='investment-form-group'>
                            <label htmlFor="interestAmount">Interest Amount *</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="Interest Amount"
                                value={receivedData.interestAmount}
                                required
                            />
                        </div>
                        <div className='investment-form-group'>
                            <label htmlFor="totalAmount">Total Amount *</label>
                            <input
                                disabled={true}
                                type="text"
                                className="form-control"
                                id="totalAmount"
                                value={receivedData.totalAmount}
                            
                                required
                            />
                        </div>
                    </div>
                
            
                    <div className='policy-button'>
                        <button type="submit" className="btn btn-primary" style={{marginTop:"1rem"}}>Buy Now</button>
                        <Link to="/customerDashboard"  className="btn btn-secondary d-text" style ={{marginLeft:"25rem", marginTop:"1.5rem"}}onClick={(e)=> {localStorage.clear()}}>Back</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddPolicy
