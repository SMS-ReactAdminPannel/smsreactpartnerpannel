import Client from '../../../api'

export const getAllCustomer = async(params:string)=>{
    try{
        const response = await Client.partner.customer_management.getallCustomer(params)
        return response;
    }catch(error){
        console.log("Error getting customer",error)
    }
}