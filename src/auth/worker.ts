import Axios from 'axios';
import { IAuthWorker } from '../types/typesClient';

declare var process: {
  env: {
     NEXT_PUBLIC_BASE_URL: string,
  }
}

const initAxios = (baseURL: string) => {
  const axios = Axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      "plataforma": "day3"
    },
    baseURL
  });

  return axios;
};

export const authApi = initAxios(process.env. NEXT_PUBLIC_BASE_URL);

export const serviceAuthWorker = async (payload: IAuthWorker) => {
  const request = await authApi.post<IAuthWorker>(`/auth/worker`, payload)
  
  return request.data
}