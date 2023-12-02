import axios from "axios"

export const getSchemeDetails= async (schemeId) => {
    try{
      console.log("schemeId---->",schemeId)
      let response = await axios.get('http://localhost:8080/insuranceapp/insuranceScheme',{
        params:{
            schemeId:schemeId
        }
      })
      console.log(response)
      return response
  
    }
    catch (error){
        throw error
    }
  }

  export const getAllSchemes = async(pageNumber, pageSize,planId)=>{
    try{
         let response = await axios.get('http://localhost:8080/insuranceapp/planschemes',{
           params:{
             pagesize: pageSize,
             pagenumber: pageNumber,
             planId:planId
         }
           
         })
         console.log('Geting data:', response);
         return response;
       
   }
   catch (error){
     throw error
   }
 }