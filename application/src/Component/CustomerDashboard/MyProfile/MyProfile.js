import React, {useState} from 'react'
import "./MyProfile.css"
import { useLocation } from 'react-router-dom';
import { updateCustomer } from '../../../Service/CustomerService';

import image from "../../../Image/ProfilePic.svg"

const MyProfile = () => {
  const location = useLocation();
  const receivedData = location.state || {};


  const [updatedData, setUpdatedData] = useState({
    username: receivedData.username,
    firstName: receivedData.firstName,
    lastName: receivedData.lastName,
    address: receivedData.address,
    email: receivedData.email,
    mobileNumber: receivedData.mobileNumber,
    dateOfBirth: receivedData.dateOfBirth,
    city: receivedData.city,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateDetails = async () => {
    try {
      let resp = await updateCustomer(updatedData);

      location.state = {
        ...location.state,
        ...updatedData,
      };
    } catch (error) {
      console.error('Error updating customer details:', error);
    }
  };
  

  return (
    <>
          <div className="resume-container">
            <div className='resume-box'>
              <div className="resume_left">
                <div className="resume_profile">
                  <img src={image} alt="profile_pic"  style={{width:"14rem", marginTop:"4rem"}}/>
                </div>
              </div>
              <div className="resume_right">
                <div className="myprofile-card">
                  <form >
                    <div className="resume_item resume_info">
                      <div className="title">
                        <h2 className="bold" style={{textAlign:'center', fontWeight:"500", fontSize:'2.5rem', paddingBottom:"1rem"}}>Customer Details</h2>
                      </div>
                      <div className="form-fields">
                        <div className="form-field">
                            <label htmlFor="username" style ={{ marginRight:"60px"}}>UserName:</label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              disabled
                              className='myprofile-form-control'
                              value={receivedData.username}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="form-field">
                            <label htmlFor="firstName" style ={{ marginRight:"59px"}}>First Name:</label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className='myprofile-form-control'
                              value={receivedData.firstName}
                              onChange={handleInputChange}
                              
                              required
                            />
                          </div>
                          <div className="form-field">
                            <label htmlFor="lastName" style ={{ marginRight:"60px"}}>Last Name:</label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className='myprofile-form-control'
                              value={receivedData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                       
                          <div className="form-field">
                            <label htmlFor="address"style ={{ marginRight:"78px"}}>Address:</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              className='myprofile-form-control'
                              value={receivedData.address}
                              onChange={handleInputChange}
                              
                            />
                          </div>
                          <div className="form-field">
                            <label htmlFor="email" style ={{ marginRight:"96px"}}>Email:</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className='myprofile-form-control'
                              value={receivedData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                        <div className="form-field">
                          <label htmlFor="phone" style ={{ marginRight:"90px"}}>Phone:</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className='myprofile-form-control'
                            value={receivedData.mobileNumber}
                            onChange={handleInputChange}
                            
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="dateOfBirth" style ={{ marginRight:"39px"}}>Date Of Birth:</label>
                          <input
                            type="text"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            className='myprofile-form-control'
                            value={receivedData.dateOfBirth}
                            onChange={handleInputChange}
                            
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="city" style ={{ marginRight:"110px"}}>City:</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className='myprofile-form-control'
                            value={receivedData.city}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="pincode" style ={{ marginRight:"80px"}}>Pincode:</label>
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            className='myprofile-form-control'
                            value={receivedData.pincode}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <button className='btn btn-primary login-button' onClick={updateDetails}>Update</button>
                       
                    </div>
                   </form>
                  
                </div>
                
              </div>
            </div>
          </div>
    </>
  )
}
export default MyProfile;