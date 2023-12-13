import React, {useState} from 'react'
import "./AgentNavbar.css"
import { Link } from 'react-router-dom';
import AgentEditProfileModel from '../Models/AgentEditProfileModel';

const AgentNavbar = () => {
  const [isAgentProfileOpen, setIsAgentProfileOpen] = useState(false);
  const [isAgentEditProfileModalOpen,setIsAgentEditProfileModalOpen] =useState(false);

  const toggleAgentProfile = () => {
    setIsAgentProfileOpen(!isAgentProfileOpen);
  };

  
  const toggleAgentEditProfileModel = () => {
    // console.log("indide")
    setIsAgentEditProfileModalOpen(!isAgentEditProfileModalOpen);
  };


  return (
    <>
        <nav className="customer-navbar navbar-expand-lg navbar-transparent navbar-light customer-fixed-top" id="nav">
          <div className="customer-nav-container">
              <a className="customer-navbar-brand" href="">
                 Insurance App
              </a>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button> */}
              <div className="customer-collapsed " id="navbarSupportedContent">
                <ul className="customer-navbar-left mr-auto">
                    <li className="customer-nav-item ">
                    
                      <Link to="/" className='customer-nav-link' >Home</Link>
                        
                    </li>
                    <li className="nav-item ">
                    <Link to="/plan" className='customer-nav-link '>Insurance Plan</Link>
                      
                      </li>
                    <li className="customer-nav-item ">
                      <a href="#About-Us" className="customer-nav-link">About Us</a>
                    </li>
                    <li className="customer-nav-item ">
                      <a href="#Contact-Us" className="customer-nav-link">Contact Us</a>
                    </li>
                </ul>
                <ul className="customer-navbar-right">
                    
                    <li className="customer-nav-item">
                      <button  className="nav-link" >
                        <i class="ri-user-3-fill"  style={{height:"3rem", fontSize:"1.6rem", color:"#223464"}} onClick={toggleAgentProfile}></i>
                      </button>
                    
                    </li>
                    {isAgentProfileOpen && (
                    <div className="profile-popup">
                        
                        <a href="">My Profile</a>
                        <a href="" className='d-text' onClick={(e) => { e.preventDefault(); toggleAgentEditProfileModel(); }}>Edit Profile</a>
   
                        <Link to="/" className='d-text' onClick={(e)=> {localStorage.clear()}}>Logout</Link>
                        
                    </div>
                    )}
                    
                    
                </ul>
              </div>
          </div>
        </nav>

        <div>
          {isAgentEditProfileModalOpen && ( <AgentEditProfileModel isOpen={isAgentEditProfileModalOpen} toggleAgentEditProfileModel={toggleAgentEditProfileModel} />
          )}
        </div>
        
    </>
    
  )
}

export default AgentNavbar
