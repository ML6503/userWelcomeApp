import jwt_decode from 'jwt-decode';
import { IUser } from 'utils/interface';
import { host } from './host';

export const registration = async (fullname: string, email: string, password: string) => {
  const { data } = await host.post('api/registration', { fullname, email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token) as IUser;
};

export const login = async (email: string, password: string) => {
  const { data } = await host.post('api/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token) as IUser;
};

export const check = async (email: string, password: string) => {
  const { data } = await host.post('api/auth', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token) as IUser;
};
