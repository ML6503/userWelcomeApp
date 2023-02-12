import { render, screen } from '@testing-library/react';
import React from 'react';

import FullNameInput from '../../components/form/FullNameInput';

describe('FullnameInput when render with email prop', () => {
  const mockHandleChange = jest.fn();

  it('should pass it to input value on change', () => {
    render(<FullNameInput name="" handleFormChange={mockHandleChange} />);
    const inputLabel = screen.getByText('full name:');
    expect(inputLabel).toBeInTheDocument();
    const input = screen.getByTestId('input-fullname') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    input.value = 'TestName TestFamilyName';
    expect(input).toHaveValue('TestName TestFamilyName');
  });
});
