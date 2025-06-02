const generateEndpoints = () => {
  return {
    dashboard: {
      get: `/api/partner/dashboard/`,
      postProduct: `/api/products/`,
      getAllProducts: `/api/products/`,
      getProductById: `/api/products/:id`,
      updateProduct: `/api/products/:id`,
      deleteProduct: `/api/products/:id`,
    },
    booking: {
      create: `/api/booking/`,
      getAll: `/api/booking/`,
      getById: `/api/booking/:id`,
      update: `/api/booking/:id`,
      cancel: `/api/booking/:id/cancel`,
    },
    announcement: {
      create: `/api/announcement/create`,
      getAll: `/api/announcement/all`,
    },
    enquiry: {
      create: `/api/enquiry/create`,
      getAll: `/api/enquiry/all`,
      update: `/api/enquiry/update/:uuid`,
    },
    spareparts: {
      create: `/api/admin/spareparts/create`,
      getById: `/api/admin/spareparts/get/:id`,
      getAll: `/api/admin/spareparts/getall`,
      update: `/api/admin/spareparts/update/:id`,
      updateStatus: `/api/admin/spareparts/updatestatus/:id`,
      delete: `/api/admin/spareparts/delete/:id`,
    },
    order_history: {
      create: `/api/partner/order-history/create`,
      getById: `/api/partner/order-history/get/:id`,
      getAll: `/api/partner/order-history/getall`,
      update: `/api/partner/order-history/update/:id`,
      updateStatus: `/api/partner/order-history/updatestatus/:id`,
      delete: `/api/partner/order-history/delete/:id`,
    },
    service_history: {
      create: `/api/partner/services-history/create`,
      getById: `/api/partner/services-history/get/:id`,
      getAll: `/api/partner/services-history/getall`,
    },
    services: {
      create: `/api/admin/service/`,
      getAll: `/api/admin/service/`,
      getById: `/api/admin/service/:uuid`,
      update: `/api/admin/service/uuid`,
      updateStatus: `/api/admin/service/toggle-status/:uuid`,
    },
    notifications: {
      create: `/api/admin/notification/`,
      createBulk: `/api/admin/notification/bulk`,
      getByUser: `/api/admin/notification/user/:userId`,
      getUnreadCount: `/api/admin/notification/user/:userId/unread-count`,
      markAsRead: `/api/admin/notification/read/:uuid`,
      markAllAsRead: `/api/admin/notification/read-all/:userId`,
      stats: `/api/admin/notification/stats/:userId`,
      delete: `/api/admin/notification/:uuid`,
      getAll: `/api/admin/notification/`,
      getById: `/api/admin/notification/:uuid`,
      update: `/api/admin/notification/:uuid`,
      createPreference: `/api/admin/notification/preferences`,
      updatePreference:`/api/admin/notification/preferences`,
      getPreference: `/api/admin/notification/preferences/:userId`,
    },
    profile:{
      getProfile: `/api/partner/auth/me`,
      updateProfile:`/api/partner/auth/update`,
      createNewProfile:`/api/partner/auth/register`,
      loginUser:`/api/partner/auth/login`
    },
    auth:{
      forgetPassword:`/api/partner/auth/forget-pass`,
      verifyOtp:`/api/partner/auth/verify-otp`,
      resetPassword:`/api/partner/auth/reset-pass/:id`
    }
  };
};

export const HTTP_END_POINTS = generateEndpoints();
