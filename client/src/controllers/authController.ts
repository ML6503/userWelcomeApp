import { AxiosError } from 'axios';
import { login, registration } from '../http/userAPI';
import { IUser } from '../utils/interface';

class AuthController {
  public _user: IUser | {};
  public _errorMsg: string;

  constructor() {
    this._user = {};
    this._errorMsg = '';
  }

  get user() {
    return this._user;
  }

  get errorMsg() {
    return this._errorMsg;
  }

  async toRegister(name: string, email: string, password: string) {
    try {
      const newUser = await registration(name, email, password);
      this._user = newUser;
    } catch (e) {
      this.catchError(e);
    }
  }

  async toLogin(email: string, password: string) {
    try {
      const existingUser = await login(email, password);
      this._user = existingUser;
    } catch (e) {
      this.catchError(e);
    }
  }

  catchError(e: unknown) {
    if (e instanceof AxiosError) {
      const errorText = e.response?.data.message;
      this._errorMsg = errorText;
    } else {
      console.error(e);
    }
  }
}

export default AuthController;
