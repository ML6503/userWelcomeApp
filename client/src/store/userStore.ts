import { makeAutoObservable } from 'mobx';
import { IUser } from '../utils/interface';

export default class UserStore {
  private _user: {} | IUser;
  private _name: string;

  constructor() {
    this._user = {};
    this._name = '';
    makeAutoObservable(this);
  }

  public setUser(user: IUser) {
    this._user = user;
    this._name = user.name;
  }

  public get user() {
    return this._user;
  }

  public get name() {
    return this._name;
  }
}
