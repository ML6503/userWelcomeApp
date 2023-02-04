import { makeAutoObservable } from 'mobx';
import { IUser } from '../utils/interface';

export default class UserStore {
  private _user: {} | IUser;
  private _isAuth: boolean;

  constructor() {
    this._isAuth = false;
    this._user = {};

    makeAutoObservable(this);
  }

  setIsAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }

  setUser(user: IUser | {}) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  get isAuth() {
    return this._isAuth;
  }
}
