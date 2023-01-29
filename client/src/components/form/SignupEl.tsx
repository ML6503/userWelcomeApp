import React from 'react';

interface ISignupProps {
  isNewUser: boolean;
  toEnterApp: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const SignupEl: React.FC<ISignupProps> = ({ isNewUser, toEnterApp }) => {
  return (
    <div className="signup-wrapper">
      {isNewUser ? <p>Existing User?</p> : <p>New User?</p>}
      <span className="signup-span" onClick={toEnterApp}>
        {isNewUser ? 'Click to login' : 'Click to signup'}
      </span>
    </div>
  );
};

export default SignupEl;
