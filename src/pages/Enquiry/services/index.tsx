import Client from '../../../api'
export const createEnquiry = async (data:string)=>{
    try{
   const response:any=await Client.partner.enquery.create(data)
   return response
    }
    catch(error){
    console.log('created successfully ',error)
    }
}