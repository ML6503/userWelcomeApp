export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  iat: string;
  exp: string;
}

export interface IValueUser {
  [x: string]: string;
}
