import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import App from '../components/App';

describe('App when render', () => {
  const useState = jest.fn();

  it('should pass it to input value on change', async () => {
    render(<App />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();

    // const logMsg = screen.getByText('Log into your account');
    // expect(logMsg).toBeInTheDocument();
    // const clickSignupMsg = screen.getByText('Click to signup');
    // expect(clickSignupMsg).toBeInTheDocument();
    // fireEvent.click(clickSignupMsg);
    // const clickLoginMsg = screen.getByText('Click to login');
    // expect(clickLoginMsg).toBeInTheDocument();
  });
});
