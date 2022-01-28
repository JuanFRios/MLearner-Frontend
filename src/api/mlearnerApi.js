import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const mlearnerApi = axios.create({ baseURL });

mlearnerApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export default mlearnerApi;
