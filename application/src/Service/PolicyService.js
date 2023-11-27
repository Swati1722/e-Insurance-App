import axios from "axios"

export const savePolicy = async(noOfYear,totalInvestmentAmount, premiumType,installmentAmount,interestAmount,totalAmount)=>{

    let response = await axios.put('http://localhost:8080/insuranceapp/scheme',{
       numberOfYear:noOfYear,
       totalInvestmentAmount,
       premiumType:premiumType,
       installmentAmount:installmentAmount,
       interestAmount:interestAmount,
       totalAmount:totalAmount

       
    },{
      
    })
    console.log('Data saved successfully:', response.data);
    return response;
  }