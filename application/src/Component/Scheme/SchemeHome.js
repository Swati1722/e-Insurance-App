import React, {useState, useEffect} from 'react'
import Navbar from "./SchemeNavbar/Navbar"
import Scheme from './SchemePage/Scheme'
import CustomerNavbar from '../CustomerDashboard/CustomerNavbar/CustomerNavbar'


const SchemeHome = () => {
  const [login,setLogin] = useState(false)

  useEffect(() => {
    // Check for authentication in localStorage and update the state accordingly
    if (localStorage.getItem('authentication')) {
      setLogin(true);
    }
  }, []);

  return (
    <>
        
        {login ? <CustomerNavbar /> : <Navbar />}
        
         <Scheme/>
    
    </>
  )
}

export default SchemeHome
