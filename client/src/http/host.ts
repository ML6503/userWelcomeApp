import axios from 'axios';

export const host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json;charset=utf-8',
    // Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
