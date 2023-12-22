import React from 'react'
import AdminNavbar from "../AdminNavbar/AdminNavbar"
import AdminPage from '../AdminPage/AdminPage'
import Footer from '../../FrontPage/Footer/Footer'

const Admin = () => {
  return (
    <>
    <div style={{backgroundColor:"none"}}>
       <AdminNavbar/>
       <AdminPage/>
       <div style={{marginTop:"10rem"}}>
        <Footer/>
        </div>
        </div>
    
    
    </>
  )
}

export default Admin
