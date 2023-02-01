import { render, screen } from '@testing-library/react';
import React from 'react';
import SignupEl from '../components/form/SignupEl';

describe('Sign Up Element when render with initial isNewUser === false  prop', () => {
  const mockToEnterApp = jest.fn();

  it('should dislay p with New user? & p with Click to singup', () => {
    render(<SignupEl isNewUser={false} toEnterApp={mockToEnterApp} />);

    const parWithNewUserQuestion = screen.getByText('New User?');
    expect(parWithNewUserQuestion).toBeInTheDocument();

    const spanClickToSignup = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content.includes('signup');
    });
    expect(spanClickToSignup).toBeInTheDocument();
  });

  it('should display: p with Existing user? & p with Click to login with isNewuser === true', () => {
    render(<SignupEl isNewUser={true} toEnterApp={mockToEnterApp} />);

    const parWithExistingUserQuestion = screen.getByText('Existing User?');
    expect(parWithExistingUserQuestion).toBeInTheDocument();
    const parWithClickToLogin = screen.getByText('Click to login');
    expect(parWithClickToLogin).toBeInTheDocument();
  });
});
