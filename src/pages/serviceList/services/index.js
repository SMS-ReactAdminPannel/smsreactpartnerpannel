
import Client from '../../../api/'
export const updateServices = async (params:string , data:string)=>{
    try{
const response =await Client.partner.services.update(params,data) 
return response
    }
    catch(error){
console.log('updating error',error)
    }
}

export const createService = async (data:any)=>{
    try{
        const response= await Client.partner.services.create(data)
        return response;
    }
    catch(error){
        console.log('Creating Error',error)
    }
}

export const deleteService =async ()=>{
    try{
        const response = await Client.partner.services.deleteservice()
        return response;
    }
    catch(error){
        console.log('deleteing error',error)
    }
}

export const getServices= async (params:string)=>{
    try{
        const response = await Client.partner.services.getById(params)
        return response;
    }
    catch(error){
        console.log('getservices error',error)
    }
}
export const getallServices=async (params:string)=>{
    try{
        const response=await Client.partner.services.getAll(params)
        return response;
    }
    catch(error){
        console.log('getAllServices error',error)
    }
}