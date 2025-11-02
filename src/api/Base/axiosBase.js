import axios from "axios";
import { getToken } from "@/utils/storage";
import { toast } from 'react-toastify';

const axiosBase = axios.create({
    baseURL:  'http://127.0.0.1:8000/en/api', // your base url here
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
    console.log('error' + error);
    const serverMessage =  error?.response?.data?.error || error?.response?.data?.message;
    const msg = serverMessage || error?.message || 'Error Response';
    toast.error(msg, {
      className: 'font'
    });
    return Promise.reject(error);
  }
);

export default axiosBase;