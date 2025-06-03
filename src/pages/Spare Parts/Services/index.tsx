import Client from '../../../api';

export const createSparePart = async (data: any) => {
  try {
    const response = await Client.partner.spareparts.create(data);
    console.log(response);
  } catch (error) {
    console.log('Error creating spare part:', error);
  }
};

export const getSparePartById = async (params: string) => {
  try {
    const response = await Client.partner.spareparts.getById(params);
    console.log(response);
  } catch (error) {
    console.log('Error getting spare part by ID:', error);
  }
};

export const getAllSpareParts = async (params: string) => {
  try {
    const response = await Client.partner.spareparts.getAll(params);
    return response;
    console.log(response);
  } catch (error) {
    console.log('Error getting all spare parts:', error);
  }
};

export const updateSparePart = async (data: any, params: string) => {
  try {
    const response = await Client.partner.spareparts.update(data, params);
    console.log(response);
  } catch (error) {
    console.log('Error updating spare part:', error);
  }
};

export const updateSparePartStatus = async (data: any, params: string) => {
  try {
    const response = await Client.partner.spareparts.updateStatus(data, params);
    console.log(response);
  } catch (error) {
    console.log('Error updating spare part status:', error);
  }
};

export const deleteSpareParts = async () => {
  try {
    const response = await Client.partner.spareparts.delete();
    console.log(response);
  } catch (error) {
    console.log('Error deleting spare parts:', error);
  }
};
