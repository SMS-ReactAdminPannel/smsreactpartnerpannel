import Client from '../../../api';

export const getAllServiceRequests = async (params: string) => {
    try{
        const response = await Client.partner.service_requets.getAll(params)
        console.log(response);
        return response;
    }catch(error){
        console.error('Error fetching service by ID:',error)
    }
}