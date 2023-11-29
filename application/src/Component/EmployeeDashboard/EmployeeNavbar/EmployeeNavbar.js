import React, {useState} from 'react'
import EmployeeEditProfileModel from '../Models/EmployeeEditProfileModel';
import "./EmployeeNavbar.css"
import { Link } from 'react-router-dom';


const EmployeeNavbar = () => {

    const [isEmployeeProfileOpen, setIsEmployeeProfileOpen] = useState(false);
    const [isEmployeeEditProfileModalOpen,setIsEmployeeEditProfileModalOpen] =useState(false);
  
    const toggleEmployeeProfile = () => {
      setIsEmployeeProfileOpen(!isEmployeeProfileOpen);
    };
  
    
    const toggleEmployeeEditProfileModel = () => {
      // console.log("indide")
      setIsEmployeeEditProfileModalOpen(!isEmployeeEditProfileModalOpen);
    };
  return (
    <>
          <nav className="employee-navbar navbar-expand-lg navbar-transparent navbar-light employee-fixed-top" id="nav">
          <div className="employee-nav-container">
              <a className="employee-navbar-brand" href="">
                 Insurance App
              </a>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button> */}
              <div className="employee-collapsed " id="navbarSupportedContent">
                <ul className="employee-navbar-left mr-auto">
                    <li className="employee-nav-item ">
                    
                      <Link to="/" className='employee-nav-link' >Home</Link>
                        
                    </li>
                    <li className="nav-item ">
                    <a href="#insurance-plans-link" className="employee-nav-link">Insurance Plans</a>
                    </li>
                    <li className="employee-nav-item ">
                    <a href="" className="employee-nav-link">About Us</a>
                    </li>
                    <li className="employee-nav-item ">
                    <a href="" className="employee-nav-link">Contact Us</a>
                    </li>
                </ul>
                <ul className="employee-navbar-right">
                    
                    <li className="employee-nav-item">
                      <button  className="nav-link" >
                        <i class="ri-user-3-fill"  style={{height:"3rem", fontSize:"1.6rem", color:"#223464"}} onClick={toggleEmployeeProfile}></i>
                      </button>
                    
                    </li>
                    {isEmployeeProfileOpen && (
                    <div className="profile-popup">
                        
                        <a href="">My Profile</a>
                        <a href="" className='d-text' onClick={(e) => { e.preventDefault(); toggleEmployeeEditProfileModel(); }}>Edit Profile</a>
                        
                        {/* <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '.55rem'}}>
                          <button type="button" style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', transition: "background-color 0.3s" }} onClick={toggleQueryModel}>
                            Query
                          </button>
                        </div> */}
                        <Link to="/" className='d-text' onClick={(e)=> {localStorage.clear()}}>Logout</Link>
                        
                    </div>
                    )}
                    
                    
                </ul>
              </div>
          </div>
        </nav>

        <div>
          {isEmployeeEditProfileModalOpen && (   <EmployeeEditProfileModel isOpen={isEmployeeEditProfileModalOpen} toggleEmployeeEditProfileModel={toggleEmployeeEditProfileModel} />
          )}
        </div>
       
    
    
    
    </>
  )
}

export default EmployeeNavbar
