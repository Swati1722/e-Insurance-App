import React, {useEffect, useState} from 'react'
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
    <>

        <div className="edit-profile-container">
            <div className="edit-profile-Left-element">
                <img style={{ height: '45vh', width: '50vh' }} src={image} alt="Query image" />
            </div>

            <div className="edit-profile-right-element">
                <div className="edit-profile-box">
                    <h1 className="edit-profile-heading">Edit Profile</h1>
                    <form className="edit-profile-postdata">
                        <div className="edit-profile-form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" disabled  value={username}/>
                        </div>

                        <div className="edit-profile-form-group">
                            <label htmlFor="password">Change Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>

                        <div className="edit-profile-button" style={{ marginTop: '1rem' }}>
                            <button type="button" className="btn btn-primary edit-profile-button">
                            Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditProfile
