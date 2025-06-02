import Client from '../../../api';

export const createNotications=async(data:any)=>{
    try{
        const response = await Client.partner.notifications.create(data)
        console.log(response)
    }catch(error){
         console.log('Error creating notifications:',error);
    }
}

export const createBulkNotifications=async(data:any)=>{
    try{
        const response = await Client.partner.notifications.createBulk(data)
        console.log(response)
    }catch(error){
        console.log('Error creating notifications:',error)
    }
}

export const getNotificationsByUser=async(params:string)=>{
    try{
        const response = await Client.partner.notifications.getByUser(params)
        console.log(response)
    }catch(error){
         console.log('Error getting notifications by user:',error)
    }
}

export const getUnreadNotificationsCount = async(params:string)=>{
    try{
        const response = await Client.partner.notifications.getUnreadCount(params)
        console.log(response)
    }catch(error){
         console.log('Error getting unread notifications counts:',error)
    }
}

export const markNotificationsAsRead = async(params:string)=>{
    try{
        const response = await Client.partner.notifications.markAsRead(params)
        console.log(response)
    }catch(error){
         console.log('Error getting unread notifications counts:',error)
    }
}

export const markAllNotificationsAsRead =  async(params:string)=>{
    try{
        const response = await Client.partner.notifications.MarkAllAsRead(params)
        console.log(response)
    }catch(error){
         console.log('Error getting unread notifications counts:',error)
    }
}

export const getNotificationsStats =  async(params:string)=>{
    try{
        const response = await Client.partner.notifications.stats(params)
        console.log(response)
    }catch(error){
         console.log('Error getting unread notifications counts:',error)
    }
}

export const deleteNotifications = async()=>{
    try{
        const response = await Client.partner.notifications.delete()
        console.log(response)
    }catch(error){
        console.log('Error delete notifications:',error)
    }
}

export const getAllNotifications = async(params:string)=>{
    try{
        const response = await Client.partner.notifications.getAll(params)
        console.log(response)
    }catch(error){
        console.log("Error getting notifications:",error)
    }
}

export const getNotificationsById = async(params:string)=>{
    try{
        const response = await Client.partner.notifications.getById(params)
        console.log(response)
    }catch(error){
        console.log("Error getting notifications:",error)
    }
}

export const updateNotifications = async(data:any,params:string)=>{
    try{
        const response = await Client.partner.notifications.update(data,params)
        console.log(response)
    }catch(error){
        console.log("Error getting notifications:",error)
    }
}

export const createPreference = async(data:any)=>{
    try{
        const response = await Client.partner.notifications.createPreference(data)
        console.log(response);
    }catch(error){
        console.log("Error create preference:",error)
    }
}

export const updatePreference = async(data:any,params:string)=>{
    try{
        const response =await Client.partner.notifications.updatePreference(data,params)
        console.log(response)
    }catch(error){
        console.log("Error UpdatePreference:",error)
    }
}

export const getPreference = async(params:string)=>{
    try{
        const response =await Client.partner.notifications.getPreference(params)
        console.log(response)
    }catch(error){
        console.log("Error getting preference:",error)
    }
}