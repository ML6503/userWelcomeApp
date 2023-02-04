import { AxiosError } from 'axios';
import UserStore from 'store/userStore';
import { login, registration } from '../http/userAPI';

class AuthController {
  public _errorMsg: string;
  private userStore: UserStore;

  constructor(userStore: UserStore) {
    this._errorMsg = '';
    this.userStore = userStore;
  }

  get errorMsg() {
    return this._errorMsg;
  }

  async toRegister(name: string, email: string, password: string) {
    try {
      const newUser = await registration(name, email, password);

      this.userStore.setUser(newUser);
      this.userStore.setIsAuth(true);
    } catch (e) {
      this.catchError(e);
    }
  }

  async toLogin(email: string, password: string) {
    try {
      const existingUser = await login(email, password);

      this.userStore.setUser(existingUser);
      this.userStore.setIsAuth(true);
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
