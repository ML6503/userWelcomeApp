import axios from 'axios';

const host = axios.create({
  url: process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_API_URL,
  proxy: false,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 5000,
});

const authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

authHost.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export { host, authHost };
