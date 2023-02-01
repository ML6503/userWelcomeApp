import jwt_decode from 'jwt-decode';
import { IUser } from 'utils/interface';
import { host, authHost } from './host';

export const registration = async (name: string, email: string, password: string) => {
  const { data } = await host.post('/api/users/registration', { name, email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token) as IUser;
};

export const login = async (email: string, password: string) => {
  const { data } = await host.post('/api/users/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token) as IUser;
};

export const check = async () => {
  const { data } = await authHost.get('/api/users/auth', {
    validateStatus: function (status) {
      if (status === 401 && localStorage.getItem('token') === '') {
        console.info('User is not yet authorized');
        return status !== 401;
      }
      return status < 600; // Resolve only if the status code is less than 600
    },
  });

  localStorage.setItem('token', data.token);
  return jwt_decode(data.token) as IUser;
};
