import React, { useState, useReducer, useContext, Dispatch, SetStateAction } from 'react';
import { observer } from 'mobx-react-lite';
//import { AxiosError } from 'axios';
import { IUser, IValueUser } from 'utils/interface';
//import { registration, login } from '../http/userAPI';
import PasswordInput from './form/PasswordInput';
import FullNameInput from './form/FullNameInput';
import EmailInput from './form/EmailInput';
import SignupEl from './form/SignupEl';
import UserStore from '../store/userStore';
import SubmitButton from './form/SubmitButton';
import AuthController from '../controllers/authController';

interface IAuthProps {
  // userStore: UserStore;
  isNewUser: boolean;
  setIsNewUser: Dispatch<SetStateAction<boolean>>;
  error: string | undefined;
  setError: Dispatch<SetStateAction<string | undefined>>;
  toAuthUser: (email: string, password: string, name?: string) => Promise<void>;
}

const Auth: React.FC<IAuthProps> = observer(
  ({ setError, error, setIsNewUser, isNewUser, toAuthUser }) => {
    const initalFormValues = {
      name: '',
      email: '',
      password: '',
    };
    const [formValues, setFormValues] = useReducer(
      (currVal: IValueUser, newVal: IValueUser) => ({
        ...currVal,
        ...newVal,
      }),
      initalFormValues
    );

    const { name, email, password } = formValues;

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      const value = event.target.value;
      const inputName = event.target.name;

      setError((prev) => {
        if (prev !== value) {
          return '';
        }
      });
      setFormValues({ [inputName]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      if (isNewUser) {
        await toAuthUser(email, password, name);
      } else {
        await toAuthUser(email, password);
      }
    };

    const toEnterApp = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault;
      setIsNewUser((prev) => !prev);
      setError('');
    };

    return (
      <div className="user-view-wrapper">
        <div className="user-view">
          <div className="form-wraper">
            {isNewUser ? <h4>Getting started</h4> : <h4>Log into your account</h4>}
            <form data-testid="form" className="form" onSubmit={handleSubmit}>
              <span className="error">{error !== '' && error}</span>
              {isNewUser && <FullNameInput name={name} handleFormChange={handleFormChange} />}
              <EmailInput email={email} handleFormChange={handleFormChange} />
              <PasswordInput password={password} handleFormChange={handleFormChange} />
              <SubmitButton isNewUser={isNewUser} />
              <SignupEl isNewUser={isNewUser} toEnterApp={toEnterApp} />
            </form>
          </div>
        </div>
      </div>
    );
  }
);

export default Auth;
