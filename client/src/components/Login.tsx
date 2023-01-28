import React, { useState } from 'react';

const FullNameInput = () => {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor="name">
        full Name:
      </label>
      <input className="form-input" type="text" id="name" name="name" placeholder="Your name..." />
    </div>
  );
};

const EmailInput = () => {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor="email">
        e-mail:
      </label>
      <input
        className="form-input"
        type="text"
        id="email"
        name="email"
        placeholder="Your e-mail..."
      />
    </div>
  );
};

const PasswordInput = () => {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor="password">
        password:
      </label>
      <input
        className="form-input"
        type="text"
        id="password"
        name="password"
        placeholder="Your password..."
      />
    </div>
  );
};

interface ISignupProps {
  isNewUser: boolean;
  toEnterApp: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
const Signup: React.FC<ISignupProps> = ({ isNewUser, toEnterApp }) => {
  return (
    <div className="signup-wrapper">
      {isNewUser ? <p>Existing User?</p> : <p>New User?</p>}
      <span className="signup-span" onClick={toEnterApp}>
        {isNewUser ? 'Click to login' : 'Click to signup'}
      </span>
    </div>
  );
};

const Login = () => {
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const toEnterApp = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault;
    setIsNewUser((prev) => !prev);
  };

  return (
    <div className="form-wraper">
      {isNewUser ? <h4>Getting started</h4> : <h4>Log into your account</h4>}
      <form className="form">
        {isNewUser && <FullNameInput />}
        <EmailInput />
        <PasswordInput />
        <button className="form-submit-button">{isNewUser ? 'Signup' : 'Login'}</button>
        <Signup isNewUser={isNewUser} toEnterApp={toEnterApp} />
      </form>
    </div>
  );
};

export default Login;
