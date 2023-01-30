import React from 'react';

interface ISubmitButtonProps {
  isNewUser: boolean;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({ isNewUser }) => {
  return (
    <div className="form-submit-button-wrapper">
      <button className="form-submit-button">{isNewUser ? 'Signup' : 'Login'}</button>
    </div>
  );
};

export default SubmitButton;
