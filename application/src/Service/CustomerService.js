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