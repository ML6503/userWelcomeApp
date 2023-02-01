import { render, screen } from '@testing-library/react';
import { describe, it } from 'node:test';
import React from 'react';

import EmailInput from '../components/form/EmailInput';

describe('when render with email prop', () => {
  const mockHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  it('should pass it to input value on change', () => {
    render(<EmailInput email="test@mail" handleFormChange={mockHandleChange} />);
  });
  expect(screen.getByText(/test@mail/)).toBeInTheDocument();
});
