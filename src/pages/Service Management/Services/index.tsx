import { data } from 'react-router-dom';
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

export const getAllJobCards = async (params: string) =>{
    try{
        const response = await Client.partner.job_card.getAll(params);
        console.log(response);
        return response;
    }
    catch(error){
        console.error("Error fetching job cards:", error);
    }
}

export const createJobCards = async(data:any)=>{
    try{
        const response = await Client.partner.job_card.create(data);
        console.log(response);
        return response;
    }
    catch(error){
        console.error("Error fetching job Cards:", error)
    }
}
export const deleteJobCards = async( params:string)=>{
    try {
        const response = await Client.partner.job_card.delete(params);
        console.log(response);
        return response;
    } catch (error) {
        console.log("Error Deleting Job Cards",error)
    }
    
}
