import axios from "axios";
export const getAdminByUserName =async(username)=>{
    let response = await axios.get('http://localhost:8080/insuranceapp/admin',{
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