import axios from "axios"
import { downloadFiles } from "./DownloadFileService"

export const savePolicy = async(username, schemeId,noOfYear,totalInvestmentAmount, premiumType,installmentAmount,interestAmount,totalAmount,profitRatio,dateCreated, maturityDate,formDataWithFiles)=>{

const formDataFields = new FormData()
//   formDataFields.append('issueDate', dateCreated)
//   formDataFields.append('maturityDate', maturityDate)

  formDataFields.append('numberOfYear', noOfYear)
  formDataFields.append('totalPremiumAmount', totalInvestmentAmount)
  formDataFields.append('premiumType', premiumType)
  formDataFields.append('installmentAmount', installmentAmount)
  formDataFields.append('intrestAmount', interestAmount)
  formDataFields.append('maturityBenefit',totalAmount)
  formDataFields.append('profitRatio', profitRatio)
  for (let i = 0; i < formDataWithFiles.length; i++) {
    formDataFields.append('documentFiles', formDataWithFiles[i])
  }
  const authToken = localStorage.getItem('authentication');
 
   try{
      let response = await axios.post(`http://localhost:8080/insuranceapp/policy/${username}/${schemeId}`, 
      formDataFields,{
         headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${authToken}`
          }
      })
      console.log('Data saved successfully:', response.data);
      return response;
   }
   catch (error){
      throw error
   }
}

export const getAllPolicy = async(pageNumber, pageSize)=>{
   try{
        let response = await axios.get('http://localhost:8080/insuranceapp/policy',{
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

export const getAllPolicyByUsername = async(pageNumber, pageSize,username)=>{
  try{
    console.log(username)
    console.log("pageno---->",pageNumber)
    console.log("pagesize---->",pageSize)
       let response = await axios.get('http://localhost:8080/insuranceapp/policydetails',{
         params:{
           pagesize: pageSize,
           pagenumber: pageNumber,
           username:username
       }
         
       })
       console.log('Geting data:', response);
       return response;
     
 }
 catch (error){
   throw error
 }
}

export const getDocument = async(policyNumber)=>{
   try{
        let response = await axios.get(`http://localhost:8080/insuranceapp/getdocuments/${policyNumber}`);
         // Handle downloading files here
      
         downloadFiles(response.data);
    } 
    catch (error) {
      throw error
    }
          
       
}


