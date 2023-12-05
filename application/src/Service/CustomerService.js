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
    let response = await axios.put('http://localhost:8080/insuranceapp/customer',{
        
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
export const updateActiveStatus = async(username) => {
  let response = await axios.put('http://localhost:8080/insuranceapp/customer',{
      
        params:{
          username:username
        },
        
      })
      console.log(response)
      console.log('Data saved successfully:', response.data)
   return response
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