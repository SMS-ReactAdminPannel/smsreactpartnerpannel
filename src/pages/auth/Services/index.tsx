import Client from '../../../api';

export const loginUser= async(data:any)=>{
    try{
        const response = await Client.partner.profile.loginUser(data)
        console.log(response)
    }catch(error){
        console.log("Error loginUser:",error)
    }
}