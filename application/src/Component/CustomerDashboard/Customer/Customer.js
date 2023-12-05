import React,{useState,useEffect} from 'react'
import CustomerNavbar from '../CustomerNavbar/CustomerNavbar'
import Part1 from "../../FrontPage/Part1/Part1"
import Footer from "../../FrontPage/Footer/Footer"
import { validateUser as validate } from '../../../Service/Authentication';

const Customer = () => {
  const [isUserValid, setIsUserValid] = useState(false)

  const validateUser = async() =>{
    const authToken = localStorage.getItem('authentication')
    if(!authToken)
    {
      setIsUserValid(false)
    }
   
    let resp = await validate(authToken)
    

    if(resp.data.role[0].authority !='ROLE_CUSTOMER')
    {
        setIsUserValid(false)
    }
    else{
      setIsUserValid(true)
    }
    return 
 }
 useEffect(()=>{
  validateUser()
},[])





 if(isUserValid)
  {
    return (
      <>
      
          <CustomerNavbar/>
          <Part1/>
          <Footer/>
          <div>
              
          </div>
      
      </>
    )
  }
    else{
      return (
        <>
          <a href='/'>Please Login First</a>

          
       </>
  
      )
    }
  
}

export default Customer
