import axios from "axios";
export const addCustomer = async(firstname,lastname,username,password,email)=>{

    let response = await axios.post('http://localhost:8080/insuranceapp/employee',{
       
    

        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        emailId: email,
        salary: salary,
        mobileNumber:mobileNumber,
        dateOfBirth: dateOfBirth,
       
    }
    )
    console.log('Data saved successfully:', response.data);
    return response;
  }

