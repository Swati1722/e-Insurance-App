import React from 'react'
import EmployeeNavbar from '../EmployeeNavbar/EmployeeNavbar'
import EmployeePage from '../EmployeePage/EmployeePage'
import Footer from '../../FrontPage/Footer/Footer'

const Employee = () => {
  return (
    <>
        <EmployeeNavbar/>
        <EmployeePage/>
        <div style={{marginTop:"10rem"}}>
        <Footer/>
        </div>
    </>
  )
}

export default Employee
