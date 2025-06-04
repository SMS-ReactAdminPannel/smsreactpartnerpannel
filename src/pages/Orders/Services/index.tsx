import Client from '../../../api';

export const getOrdersHistory = async(params: string)=>{
    try{
        const response = await Client.partner.order_history.getAll(params)
        console.log(response);
        return response
    }catch(error){
        console.log("Error getting orders history:", error)
    }
}