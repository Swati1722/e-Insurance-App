import axios from "axios"

export const savePolicy = async(username, noOfYear,totalInvestmentAmount, premiumType,installmentAmount,interestAmount,totalAmount,profitRatio, formDataWithFiles)=>{

const formDataFields = new FormData()
//   formDataFields.append('issuedate', formData.dateCreated)
//   formDataFields.append('maturitydate', formData.maturityDate)
  formDataFields.append('noOfYear', noOfYear)
  formDataFields.append('totalInvestmentAmount', totalInvestmentAmount)
  formDataFields.append('premiumType', premiumType)
  formDataFields.append('installmentAmount', installmentAmount)
  formDataFields.append('interestAmount', interestAmount)
  formDataFields.append('totalAmount',totalAmount)
  formDataFields.append('profitRatio', profitRatio)
  for (let i = 0; i < formDataWithFiles.length; i++) {
    formDataFields.append('documentFiles', formDataWithFiles[i])
  }
  console.log(formDataWithFiles, 'formdata')
  console.log(formDataFields)
   try{
      let response = await axios.post('http://localhost:8080/insuranceapp/policy/${username}', 
      formDataFields,{
         headers: {
            'Content-Type': 'multipart/form-data',
            // Authorization: Bearer ${token}
          }
      })
      console.log('Data saved successfully:', response.data);
      return response;
   }
   catch (error){
      throw error
   }
}