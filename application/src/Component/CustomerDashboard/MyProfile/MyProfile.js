import React, {useState} from 'react'
import "./MyProfile.css"
import image from "../../../Image/ProfilePic.svg"

const MyProfile = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: '',
    additionalField1: '',
    additionalField2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
          <div className="resume-container">
            <div className='resume-box'>
              <div className="resume_left">
                <div className="resume_profile">
                  <img src={image} alt="profile_pic"  style={{width:"14rem", marginTop:"1.5rem"}}/>
                </div>
              </div>
              <div className="resume_right">
                <div className="myprofile-card">
                  <form onSubmit={handleSubmit}>
                    <div className="resume_item resume_info">
                      <div className="title">
                        <h2 className="bold" style={{textAlign:'center', fontWeight:"500", fontSize:'2.5rem', paddingBottom:"1rem"}}>Customer Details</h2>
                      </div>
                      <div className="form-fields">
                        <div className="form-field">
                          <label htmlFor="firstName" style ={{ marginRight:"59px"}}>First Name:</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className='myprofile-form-control'
                            value={formData.firstName}
                            onChange={handleChange}
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
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="email" style ={{ marginRight:"96px"}}>Email:</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className='myprofile-form-control'
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="phone" style ={{ marginRight:"90px"}}>Phone:</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className='myprofile-form-control'
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="additionalField1" style ={{ marginRight:"10px"}}>Additional Field 1:</label>
                          <input
                            type="text"
                            id="additionalField1"
                            name="additionalField1"
                            className='myprofile-form-control'
                            value={formData.additionalField1}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-field">
                          <label htmlFor="additionalField2" style ={{ marginRight:"10px"}}>Additional Field 2:</label>
                          <input
                            type="text"
                            id="additionalField2"
                            name="additionalField2"
                            className='myprofile-form-control'
                            value={formData.additionalField2}
                            onChange={handleChange}
                          />
                        </div>
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