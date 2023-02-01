import React from 'react';

interface IPasswordInputProps {
  password: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({ password, handleFormChange }) => {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor="password">
        password:
      </label>
      <input
        data-testid="input-password"
        className="form-input"
        type="password"
        id="password"
        name="password"
        placeholder="Your password..."
        value={password}
        required
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
        onChange={handleFormChange}
        title="Password should be a minimum of 8 characters with at least 1 number and 1 special character"
      />
    </div>
  );
};

export default PasswordInput;
