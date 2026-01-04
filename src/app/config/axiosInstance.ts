import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVICE_CONTEXT,
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
