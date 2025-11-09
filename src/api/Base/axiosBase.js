import axios from "axios";
import { getToken } from "@/utils/methods";
import { toast } from 'react-toastify';

const axiosBase = axios.create({
    baseURL:  'http://127.0.0.1:8000/api/', // your base url here
    headers: {
        'Content-Type': 'application/json',
    },
});

// include token if he is exists with any request
axiosBase.interceptors.request.use( (config) => {
    const token = getToken();
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config;
});


// show message of respnse in notification is called toast
axiosBase.interceptors.response.use(
  response => {
    const msg = response?.data?.message;
    if(msg){
      toast.success(msg, {
        className: 'font'
      });
    }
     return response;
  },
  error => {
    const serverMessage =  error?.response?.data?.errors[0] || error?.response?.data?.message;
    const msg = serverMessage || error?.message || 'Error Response';
    toast.error(msg, {
      className: 'font'
    });
    return Promise.reject(error);
  }
);

export default axiosBase;