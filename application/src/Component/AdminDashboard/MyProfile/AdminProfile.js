import React, {useState} from 'react'
import "./MyProfile.css"
import { useLocation } from 'react-router-dom';
import image from "../../../Image/ProfilePic.svg"
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {

    const location = useLocation();
    const receivedData = location.state || {};
    const navigate = new useNavigate();
    
  
  
    const [updatedData, setUpdatedData] = useState({
      username: receivedData.username,
      firstName: receivedData.firstName,
      lastName: receivedData.lastName,
     
      email: receivedData.email,
      mobileNumber: receivedData.mobileNumber,
      dateOfBirth: receivedData.dateOfBirth,
      
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
        <div className="admin-resume-container">
            <div className='admin-resume-box'>
              <div className="admin-resume_left">
                <div className="admin-resume_profile">
                  <img src={image} alt="profile_pic"  style={{width:"18rem", marginTop:"4rem" ,marginLeft:"2rem"}}/>
                </div>
              </div>
              <div className="admin-resume_right">
                <div className="myprofile-card">
                  <form >
                    <div className="admin-resume_item admin-resume_info">
                      <div className="title">
                        <h2 className="bold" style={{textAlign:'center', fontWeight:"600", fontSize:'2.5rem', paddingBottom:"1rem"}}>My Profile</h2>
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
                              backgroundColor: 'rgb(34, 52, 100)',
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
export default MyProfile;