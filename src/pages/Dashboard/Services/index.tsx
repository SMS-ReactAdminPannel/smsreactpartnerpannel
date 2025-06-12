import Client from '../../../api';

export const getDashboard = async (params: string)=>{
    try{
        const response = await Client.partner.dashboard.get(params)
        console.log(response)
        return response;
    }catch(error){
        console.log('Error getting dashboard data:',error)
    }
}

export const getTransaction = async (period: string) => {
  try {
    const response = await Client.partner.dashboard.getTransactions(`?period=${period}`);
    return response;
  } catch (error) {
    console.log('Error getting transactions data:', error);
    return null; // important
  }
};

