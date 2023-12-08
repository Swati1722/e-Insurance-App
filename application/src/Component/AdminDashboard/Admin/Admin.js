import React from 'react'
import AdminNavbar from "../AdminNavbar/AdminNavbar"
import AdminPage from '../AdminPage/AdminPage'
import Footer from '../../FrontPage/Footer/Footer'

const Admin = () => {
  return (
    <>
       <AdminNavbar/>
       <AdminPage/>
       <div style={{marginTop:"10rem"}}>
        <Footer/>
        </div>
    
    
    </>
  )
}

export default Admin
