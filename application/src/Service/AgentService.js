import axios from "axios";
export const getAllAgent = async(pageNumber, pageSize)=>{
    try{
         let response = await axios.get('http://localhost:8080/insuranceapp/agents',{
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
export const addAgent = async(firstname,lastname,username,password,email,totalCommission,mobileNumber,dateOfBirth)=>{

  let response = await axios.post('http://localhost:8080/insuranceapp/agent',{
     
  

      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      emailId: email,
      totalCommission: totalCommission,
      mobileNumber:mobileNumber,
      dateOfBirth: dateOfBirth,
     
  }
  )
  console.log('Data saved successfully:', response.data);
  return response;
}
