import React from 'react';

interface IPasswordInputProps {
  password: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({ password, handleFormChange }) => {
  const passwordValidity = (e: React.FormEvent) =>
    (e.target as HTMLInputElement).setCustomValidity(
      'Password should be a minimum of 8 characters with at least 1 number and 1 character'
    );

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
        value={password}
        required
        pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/"
        onInvalid={passwordValidity}
        onChange={handleFormChange}
      />
    </div>
  );
};

export default PasswordInput;
