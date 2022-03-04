import { startLogout } from 'actions/auth';
import axios from 'axios';
import { store } from 'store/store';
import { toast } from 'react-toastify';

const baseURL = process.env.REACT_APP_API_URL;

const mlearnerApi = axios.create({ baseURL });

mlearnerApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

// Add a response interceptor
mlearnerApi.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.msg, { position: 'top-center' });
    if (error.response.status === 401) {
      store.dispatch(startLogout());
    }
    return Promise.reject(error.response.data);
  }
);

export default mlearnerApi;
