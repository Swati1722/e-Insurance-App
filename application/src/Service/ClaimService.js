import axios from "axios";

export const  addClaim= async(installmentNo,amount,policyNumber,cardNumber,nameOnCard) => {
    console.log("cardnumbrer--->",cardNumber)
  try{ 
        let response = await axios.post(`http://localhost:8080/insuranceapp/claim/${policyNumber}`,{
          installmentNo:installmentNo,
            amount:amount,
            cardNumber:cardNumber,
            nameOnCard:nameOnCard
        }
        )
        console.log('Data saved successfully:', response.data)
        return response
    }
    catch (error) {
      throw error
    }
  
  }
