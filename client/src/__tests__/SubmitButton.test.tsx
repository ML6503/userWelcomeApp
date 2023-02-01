import { render, screen } from '@testing-library/react';
import React from 'react';

import SubmitButton from '../components/form/SubmitButton';

describe('SubmitButton when render with isNewuser prop', () => {
  it('should display value Login when !isNewUser', () => {
    render(<SubmitButton isNewUser={false} />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should display value Signup when isNewUser', () => {
    render(<SubmitButton isNewUser={true} />);
    expect(screen.getByText('Signup')).toBeInTheDocument();
  });
});
