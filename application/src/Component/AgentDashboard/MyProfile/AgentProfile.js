import React, {useState} from 'react'
import image from "../../../Image/ProfilePic.svg"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './AgentProfile.css'
const MyProfile = () => {
  const navigate = new useNavigate();
  const location = useLocation();
  const receivedData = location.state || {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [updatedData, setUpdatedData] = useState({
    username: receivedData.username,
    firstName: receivedData.firstName,
    lastName: receivedData.lastName,
   
    email: receivedData.email,
    mobileNumber: receivedData.mobileNumber,
    dateOfBirth: receivedData.dateOfBirth,
    
  });

  const updateDetails = async () => {
    try {
      // let resp = await updateCustomer(updatedData);

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
        <div className="agent-resume-container">
            <div className='agent-resume-box'>
              <div className="agent-resume_left">
                <div className="agent-resume_profile">
                  <img src={image} alt="profile_pic"  style={{width:"14rem", marginTop:"4rem"}}/>
                </div>
              </div>
              <div className="agent-resume_right">
                <div className="myprofile-card">
                  <form >
                    <div className="agent-resume_item agent-resume_info">
                      <div className="title">
                        <h2 className="bold" style={{textAlign:'center', fontWeight:"500", fontSize:'2.5rem', paddingBottom:"1rem"}}>Admin Details</h2>
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
                        
                      </div>
                      <div className='button-container'>
                          <button className='btn btn-primary  left-button'>Update</button>
                          <button
                          className='btn btn-primary  right-button'
                            onClick={() => navigate(-1)}
                            style={{
                              width: '5rem',
                              padding: '2px',
                              marginLeft: '50%',
                              color: 'white',
                              borderRadius:'5px'
                            }}
                          >
                            Go Back
                          </button>
                      </div>
                    </div>
                   </form>
                  
                </div>
                
              </div>
            </div>
          </div>
    
    </>
  )
}

export default MyProfile
