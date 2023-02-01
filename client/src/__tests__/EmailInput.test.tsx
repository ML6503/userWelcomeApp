import { render, screen } from '@testing-library/react';
import React from 'react';

import EmailInput from '../components/form/EmailInput';

describe('EmailInput when render with email prop', () => {
  const mockHandleChange = jest.fn();

  it('should pass it to input value on change', () => {
    render(<EmailInput email="" handleFormChange={mockHandleChange} />);
    const inputLabel = screen.getByText('e-mail:');
    expect(inputLabel).toBeInTheDocument();
    const input = screen.getByTestId('input-email') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    input.value = 'test@email.com';
    expect(input).toHaveValue('test@email.com');
  });
});
