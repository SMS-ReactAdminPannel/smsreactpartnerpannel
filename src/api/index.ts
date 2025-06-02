import HttpClient from "./httpClient";
import { HTTP_END_POINTS } from "./httpEndpoints";

class Client {
  partner = {
    spareparts: {
      create: (data: any) =>
        HttpClient.post(HTTP_END_POINTS.spareparts.create,data),
      getById: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.spareparts.getById, params),
      getAll: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.spareparts.getAll, params),
      update: (data: any, params: string) =>
        HttpClient.update(HTTP_END_POINTS.spareparts.getAll, data, params),
      updateStatus: (data: any, params: string) =>
        HttpClient.update(
          HTTP_END_POINTS.spareparts.updateStatus,
          data,
          params
        ),
      delete: () => HttpClient.delete(HTTP_END_POINTS.spareparts.delete),
    },
    order_history: {
      create: (data: any) =>
        HttpClient.post(HTTP_END_POINTS.order_history.create, data),
      getById: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.order_history.getById, params),
      getAll: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.order_history.getAll, params),
      update: (data: any, params: string) =>
        HttpClient.update(HTTP_END_POINTS.order_history.update, data, params),
      updateStatus: (data: any, params: string) =>
        HttpClient.update(
          HTTP_END_POINTS.order_history.updateStatus,
          data,
          params
        ),
      delete: () => HttpClient.delete(HTTP_END_POINTS.order_history.delete),
    },
    service_history: {
      create: (data: any) =>
        HttpClient.post(HTTP_END_POINTS.service_history.create, data),
      getById: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.service_history.getById, params),
      getAll: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.service_history.getAll, params),
    },
    services: {
      create: (data: any) =>
        HttpClient.post(HTTP_END_POINTS.services.create, data),
      getById: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.services.getById, params),
      getAll: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.services.getAll, params),
      update: (data: any, params: string) =>
        HttpClient.update(HTTP_END_POINTS.services.update, data, params),
      updateStatus: (data: any, params: string) =>
        HttpClient.update(HTTP_END_POINTS.services.updateStatus, data, params),
    },
    notifications: {
      create: (data: any) =>
        HttpClient.post(HTTP_END_POINTS.notifications.create, data),
      createBulk: (data: any) =>
        HttpClient.post(HTTP_END_POINTS.notifications.createBulk, data),
      getByUser: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.getByUser, params),
      getUnreadCount: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.getUnreadCount, params),
      markAsRead: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.markAsRead, params),
      MarkAllAsRead: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.markAllAsRead, params),
      stats: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.stats, params),
      delete: () => HttpClient.delete(HTTP_END_POINTS.notifications.delete),
      getAll: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.getAll, params),
      getById: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.getById, params),
      update: (data: any, params: string) =>
        HttpClient.update(HTTP_END_POINTS.notifications.update, data, params),
      createPreference: (data: any,) =>
        HttpClient.post(
          HTTP_END_POINTS.notifications.createPreference,
          data,
        ),
      updatePreference: (data: any, params: string) =>
        HttpClient.update(
          HTTP_END_POINTS.notifications.updatePreference,
          data,
          params
        ),
      getPreference: (params: string) =>
        HttpClient.get(HTTP_END_POINTS.notifications.getPreference, params),
    },
    profile:{
        getProfile:(data:any)=>HttpClient.get(HTTP_END_POINTS.profile.getProfile,data),
        updateProfile:(data:any, params:string)=>HttpClient.update(HTTP_END_POINTS.profile.updateProfile,data,params),
        createNewProfile:(data:any)=>HttpClient.post(HTTP_END_POINTS.profile.createNewProfile,data),
        loginUser:(data:any)=>HttpClient.post(HTTP_END_POINTS.profile.loginUser,data)
    },
    auth:{
        forgetPassword:(data:any)=>HttpClient.post(HTTP_END_POINTS.auth.forgetPassword,data),
        verifyOtp:(data:any)=>HttpClient.post(HTTP_END_POINTS.auth.verifyOtp,data),
        resetPassword:(data:any)=>HttpClient.post(HTTP_END_POINTS.auth.resetPassword,data)
    }
  };
}

export default new Client();
