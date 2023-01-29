import { host } from './instance';

export const registration = async (fullname: string, email: string, password: string) => {
  const response = await host.post('api/registration', { fullname, email, password });
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await host.post('api/login', { email, password });
  return response;
};

export const check = async (email: string, password: string) => {
  const response = await host.post('api/check', { email, password });
  return response;
};
