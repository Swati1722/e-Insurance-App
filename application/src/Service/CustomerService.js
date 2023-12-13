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

  export const addCustomerByAgent = async(firstName,lastName,userName,password,email,mobileNumber,dateOfBirth,address,state,city,pincode)=>{
    let response = await axios.post('http://localhost:8080/insuranceapp/customer',{
          address:address,
          city:city,
          state:state,
          pincode:pincode,
          userdetails: {
            firstname: firstName,
            lastname: lastName, // You can set this to an empty string or provide a last name if available
            username: userName,
            password: password,
            emailId: email,
            mobileNumber:mobileNumber,
            dateOfBirth:dateOfBirth,
           
          }
      },{
      })
      console.log('Data saved successfully:', response.data);
      return response;
    }

  export const getCustomerByUserName = async(username)=>{
   console.log(username)
      let response = await axios.get('http://localhost:8080/insuranceapp/customer',{
      params:{
        username:username
      },
      headers :{
          Authorization: 'Bearer '+localStorage.getItem('authentication')
        }
        
      })
      console.log('Geting data:', response);
      return response;
  }

  export const updateCustomerdetails = async(username,mobileNumber,dateOfBirth,address,state,city,pincode) => {
    let response = await axios.put('http://localhost:8080/insuranceapp/registercustomer',{
        
          username:username,
          mobileNumber:mobileNumber,
          dateOfBirth:dateOfBirth,
          address:address,
          state:state,
          city:city,
          pincode:pincode
        },
        {
          params:{
            username:username
          },
          // headers :{
          //   Authorization: 'Bearer '+localStorage.getItem('authentication')
          // }
        })
        console.log(response)
        console.log('Data saved successfully:', response.data)
     return response
  }

  export const getAllCustomer = async(pageNumber, pageSize)=>{
   try{
        let response = await axios.get('http://localhost:8080/insuranceapp/customers',{
          
        params:{
            pagesize: pageSize,
            pagenumber: pageNumber
        }
          
        })
        console.log('Geting data:', response);
        return response;
      
  }
  catch (error){
    throw error
  }
}

export const getAllCustomerActive = async(pageNumber, pageSize)=>{
  try{
       let response = await axios.get('http://localhost:8080/insuranceapp/customersactive',{
         
       params:{
           pagesize: pageSize,
           pagenumber: pageNumber
       }
         
       })
       console.log('Geting data:', response);
       return response;
     
 }
 catch (error){
   throw error
 }
}

export const deleteCustomer= async(username) => {
  let response = await axios.put('http://localhost:8080/insuranceapp/customer',{
      
        params:{
          username:username
        },
       
      })
      console.log(response)
      console.log('Data saved successfully:', response.data)
   return response
}
export const updateCustomerActive = async(username,status) => {
 
  try{ 
      let response = await axios.put(`http://localhost:8080/insuranceapp/customer/${username}/${status}`)
      console.log(response)
      console.log('Data saved successfully:', response.data)
      return response
  }
  catch (error) {
    throw error
  }

}


export const updateCustomer = async(username,firstName,lastName,email,mobileNumber,dateOfBirth,address,state,city,pincode) => {
  let response = await axios.put('http://localhost:8080/insuranceapp/customer',{
        firstname:firstName,
        lastname:lastName,
        email:email,
        mobileNumber:mobileNumber,
        dateOfBirth:dateOfBirth,
        address:address,
        state:state,
        city:city,
        pincode:pincode
      },
      {
        params:{
          username:username
        },
        
      })
   console.log(response)
   console.log('Data saved successfully:', response.data)
   return response
}