import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const CustomerNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
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
                    <a href="" className="customer-nav-link">Home</a>
                    </li>
                    <li className="nav-item ">
                    <a href="#insurance-plans-link" className="customer-nav-link">Insurance Plans</a>
                    </li>
                    <li className="customer-nav-item ">
                    <a href="" className="customer-nav-link">About Us</a>
                    </li>
                    <li className="customer-nav-item ">
                    <a href="" className="customer-nav-link">Contact Us</a>
                    </li>
                </ul>
                <ul className="customer-navbar-right">
                    
                    <li className="customer-nav-item">
                      <button  className="nav-link" >
                        <i class="ri-user-3-fill"  style={{height:"3rem", fontSize:"1.6rem", color:"#223464"}} onClick={toggleProfile}></i>
                      </button>
                    
                    </li>
                    {isProfileOpen && (
                    <div className="profile-popup">
                        
                        <a href="">My Profile</a>
                        <a href="">Edit Profile</a>
                        <Link to="/" className='d-text' onClick={(e)=> {localStorage.clear()}}>Logout</Link>
                        
                    </div>
                    )}
                    
                    
                </ul>
              </div>
          </div>
        </nav>
    </>
    
  )
}

export default CustomerNavbar
