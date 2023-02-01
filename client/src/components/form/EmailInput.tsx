import React from 'react';

interface IEmailInputProps {
  email: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<IEmailInputProps> = ({ email, handleFormChange }) => {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor="email">
        e-mail:
      </label>
      <input
        data-testid="input-email"
        className="form-input"
        type="email"
        id="email"
        name="email"
        placeholder="Your e-mail..."
        value={email}
        required
        onChange={handleFormChange}
      />
    </div>
  );
};

export default EmailInput;
