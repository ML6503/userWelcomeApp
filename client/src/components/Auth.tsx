import React, { useState, useReducer, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { IUser, IValueUser } from 'utils/interface';
import { registration, login } from '../http/userAPI';
import PasswordInput from './form/PasswordInput';
import FullNameInput from './form/FullNameInput';
import EmailInput from './form/EmailInput';
import SignupEl from './form/SignupEl';
import { AppContext } from '../index';
import { AxiosError } from 'axios';

const Auth = observer(() => {
  const appContext = useContext(AppContext);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

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
    const name = event.target.name;

    setError((prev) => {
      if (prev !== value) {
        return '';
      }
    });
    setFormValues({ [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userStore = appContext?.user;
      let user: IUser;

      if (isNewUser) {
        user = await registration(name, email, password);
      } else {
        user = await login(email, password);
        console.log('api response:', user);
      }
      userStore!.setUser(user);
      userStore!.setIsAuth(true);
    } catch (e) {
      if (e instanceof AxiosError) {
        const errorText = e.response?.data.message;
        console.error(errorText);
        if (isNewUser && errorText?.includes('email')) {
          setError(errorText);
        }
      } else {
        console.error(e);
      }
    }
  };

  const toEnterApp = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault;
    setIsNewUser((prev) => !prev);
  };

  const errorEl = <span className="error">{error !== '' && error}</span>;

  const submitButton = (
    <div className="form-submit-button-wrapper">
      <button className="form-submit-button">{isNewUser ? 'Signup' : 'Login'}</button>
    </div>
  );

  return (
    <div className="user-view-wrapper">
      <div className="user-view">
        <div className="form-wraper">
          {isNewUser ? <h4>Getting started</h4> : <h4>Log into your account</h4>}
          <form className="form" onSubmit={handleSubmit}>
            {errorEl}
            {isNewUser && <FullNameInput name={name} handleFormChange={handleFormChange} />}
            <EmailInput email={email} handleFormChange={handleFormChange} />
            <PasswordInput password={password} handleFormChange={handleFormChange} />
            {submitButton}
            <SignupEl isNewUser={isNewUser} toEnterApp={toEnterApp} />
          </form>
        </div>
      </div>
    </div>
  );
});

export default Auth;
