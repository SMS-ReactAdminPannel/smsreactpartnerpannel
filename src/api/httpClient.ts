import axios from "axios";

const backEndUrl: string = import.meta.env.VITE_PUBLIC_API_URL;

const Axios = axios.create({
  baseURL: backEndUrl,
  timeout: 50000000,
  headers: {
    "Content-Type": "application/json",
  },
});


Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers["Authorization"] = `${token ? token : ""}`;
  }
  return config;
});

class HttpClient {
  async get(url: string, params: string = '') {
    const response: unknown = await Axios.get(url, {
      params: params,
      headers: {},
    });
    return response;
  }

  async post(url: string, data: any,) {
    const response: unknown = await Axios.post(url, data, {
      headers: {},
    });
    return response;
  }

  async update(url: string, params: string, data: string,) {
    const response = await Axios.put(url, data, {
      params: params,
      headers: {},
    });
    return response?.data;
  }

  async delete(url: string) {
    const response = await Axios.delete(url);
    return response?.data;
  }

  async fileGet(url: string) {
    const response = Axios.get(url, {
      responseType: "blob",
      headers: {},
    });
    return response;
  }
}

export default new HttpClient();
