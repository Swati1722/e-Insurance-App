import axios from "axios";
export const addEmployee = async(firstname,lastname,username,password,email,salary,mobileNumber,dateOfBirth)=>{

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


  export const getAllEmployee = async(pageNumber, pageSize)=>{
    try{
         let response = await axios.get('http://localhost:8080/insuranceapp/employees',{
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

 export const getEmployeeByUserName =async(username)=>{
  let response = await axios.get('http://localhost:8080/insuranceapp/employee',{
      params:{
        username:username
      }
      // headers :{
      //     Authorization: 'Bearer '+localStorage.getItem('authentication')
      //   }
        
      })
      console.log('Geting data:', response);
      return response;
}
