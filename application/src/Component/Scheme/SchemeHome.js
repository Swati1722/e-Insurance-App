import React, {useState} from 'react'
import Navbar from "./SchemeNavbar/Navbar"
import Scheme from './SchemePage/Scheme'
import CustomerNavbar from '../CustomerDashboard/CustomerNavbar/CustomerNavbar'


const SchemeHome = () => {
  // const [login,setLogin] = useState(false)

  // if(localStorage.getItem('authentication'))
  // {
  //   setLogin(true)
  // }


  return (
    <>
          {/* <CustomerNavbar/>  */}
        <Navbar/>
        
         <Scheme/>
    
    </>
  )
}

export default SchemeHome
