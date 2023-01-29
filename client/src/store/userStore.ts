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

  public setIsAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }

  public setUser(user: IUser) {
    this._user = user;
  }

  public get user() {
    return this._user;
  }

  public get isAuth() {
    return this._isAuth;
  }
}
