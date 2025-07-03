
import Client from '../../../api';

export const updateServices = async (uuid: string, data: any) => {
  try {
    const response = await Client.partner.services.update(uuid, data);
    return response;
  } catch (error) {
    console.log('Updating service error:', error);
    throw error;
  }
};

export const createService = async (data: any) => {
  try {
    const response = await Client.partner.services.create(data);
    return response;
  } catch (error) {
    console.log('Creating service error:', error);
    throw error;
  }
};

export const deleteService = async (uuid: string) => {
  try {
    const response = await Client.partner.services.deleteservice(uuid);
    return response;
  } catch (error) {
    console.log('Deleting service error:', error);
    throw error;
  }
};

export const getServices = async (uuid: string) => {
  try {
    const response = await Client.partner.services.getById(uuid);
    return response;
  } catch (error) {
    console.log('Get service by ID error:', error);
    throw error;
  }
};

export const getallServices = async (partnerId?: string) => {
  try {
    const response = await Client.partner.services.getAll(partnerId);
    return response;
  } catch (error) {
    console.log('Get all services error:', error);
    throw error;
  }
};
