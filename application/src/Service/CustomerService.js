import axios from "axios";

export const authslogin = async(username, password) => {
    try{
        let response = await axios.post('http://localhost:8080/insuranceapp/login',{
            username:username,
            password:password
        })
    
        console.log(response)
    return response
    }
    catch (error){
        throw error
    }
}

export const addCustomer = async(firstName,lastName,userName,password,email)=>{
    console.log("firstname-->",firstName)
    let response = await axios.post('http://localhost:8080/insuranceapp/customer',{
       
        userdetails: {
          firstname: firstName,
          lastname: lastName, // You can set this to an empty string or provide a last name if available
          username: userName,
          password: password,
          emailId: email,
          
        }
    },{
      
    })
    console.log('Data saved successfully:', response.data);
    return response;
  }