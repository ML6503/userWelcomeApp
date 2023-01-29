import React from 'react';

interface IFullNameInputProps {
  name: string;
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FullNameInput: React.FC<IFullNameInputProps> = ({ name, handleFormChange }) => {
  return (
    <div className="form-element">
      <label className="form-label" htmlFor="name">
        full name:
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        placeholder="Your name..."
        value={name}
        maxLength={50}
        minLength={5}
        onChange={handleFormChange}
      />
    </div>
  );
};

export default FullNameInput;
