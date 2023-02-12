import { render, screen } from '@testing-library/react';
import React from 'react';

import PasswordInput from '../../components/form/PasswordInput';

describe('PasswordInput when render with password prop', () => {
  const mockHandleChange = jest.fn();

  it('should pass it to input value on change', () => {
    render(<PasswordInput password="" handleFormChange={mockHandleChange} />);
    const inputLabel = screen.getByText('password:');
    expect(inputLabel).toBeInTheDocument();
    const input = screen.getByTestId('input-password') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    input.value = 'TestPassword123!';
    expect(input).toHaveValue('TestPassword123!');
  });
});
