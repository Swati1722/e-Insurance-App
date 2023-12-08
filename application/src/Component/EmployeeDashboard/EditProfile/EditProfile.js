import React, {useState,useEffect} from 'react'
import image from '../../../Image/Laptop.svg'
import './EditProfile.css'
import {validateUser as validate} from "../../../Service/Authentication"


const EditProfile = () => {
    const[ username,setUsername] = useState()

    const validateUser = async() =>{
        const authToken = localStorage.getItem('authentication')
        if(authToken)
        {
            console.log("authtoken--->"+authToken)
            let resp = await validate(authToken)
            console.log(resp)
            setUsername(resp.data.sub)
        }
     }
     useEffect(()=>{
        validateUser()
      },[])


  return (
    <div>
            <div className="admin-edit-profile-container">
            <div className="admin-edit-profile-Left-element">
                <img style={{ height: '45vh', width: '50vh' }} src={image} alt="Query image" />
            </div>

            <div className="admin-edit-profile-right-element">
                <div className="admin-edit-profile-box">
                    <h1 className="admin-edit-profile-heading">Edit Profile</h1>
                    <form className="admin-edit-profile-postdata">
                        <div className="admin-edit-profile-form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" disabled  value={username}/>
                        </div>

                        <div className="admin-edit-profile-form-group">
                            <label htmlFor="password">Change Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>

                        <div className="admin-edit-profile-button" style={{ marginTop: '1rem' }}>
                            <button type="button" className="btn btn-primary admin-edit-profile-button">
                            Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile
