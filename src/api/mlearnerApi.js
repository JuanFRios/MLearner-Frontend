import axios from 'axios';

const baseURL = 'https://restserver-pi.herokuapp.com/api';

const mlearnerApi = axios.create({ baseURL });

mlearnerApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export default mlearnerApi;
