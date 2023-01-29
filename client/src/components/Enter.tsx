import React, { useState, useReducer } from 'react';
import { IUser, IValueUser } from 'utils/interface';
import { registration } from '../http/userAPI';
import PasswordInput from './form/PasswordInput';
import FullNameInput from './form/FullNameInput';
import EmailInput from './form/EmailInput';
import SignupEl from './form/SignupEl';

const Enter = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
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
    console.log('input name  ', name);
    setFormValues({ [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isNewUser) {
      // const response = await registration();
    } else {
      // const response = await login();
    }
  };

  const toEnterApp = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault;
    setIsNewUser((prev) => !prev);
  };

  return (
    <div className="user-view-wrapper">
      <div className="user-view">
        <div className="form-wraper">
          {isNewUser ? <h4>Getting started</h4> : <h4>Log into your account</h4>}
          <form className="form" onSubmit={handleSubmit}>
            {isNewUser && <FullNameInput name={name} handleFormChange={handleFormChange} />}
            <EmailInput email={email} handleFormChange={handleFormChange} />
            <PasswordInput password={password} handleFormChange={handleFormChange} />
            <button className="form-submit-button">{isNewUser ? 'Signup' : 'Login'}</button>
            <SignupEl isNewUser={isNewUser} toEnterApp={toEnterApp} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enter;
