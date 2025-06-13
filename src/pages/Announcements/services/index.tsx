import Client from '../../../api';
export const pinnedAnnouncements= async (data:any)=>{
    try{
       const response = await Client.partner.annoucement.update(data)
       return response;
    }
    catch (error){
console.log('pinned error',error)
    }
}

export const announcementget=async (data:any )=>{
    try{
        const response = await Client.partner.annoucement.get(data)
        return response;
    }
    catch(error){
        console.log('error show data',error)
    }
}