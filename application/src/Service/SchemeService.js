import axios from "axios"

export const getSchemeDetails= async (schemeId) => {
    try{
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