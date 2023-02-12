import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import App from '../../components/App';

describe('App when render', () => {
  it('should display Log into account form and after click on sign up - display Sign Up form', async () => {
    render(<App />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();

    expect(screen.queryByText(/Log into your account/)).toBeNull();
    expect(await screen.findByText(/Log into your account/)).toBeInTheDocument();
    expect(await screen.findByText(/e-mail:/)).toBeInTheDocument();
    expect(await screen.findByText(/password:/)).toBeInTheDocument();
    expect(await screen.findByText(/Login/)).toBeInTheDocument();
    expect(await screen.findByText(/New User?/)).toBeInTheDocument();
    expect(await screen.findByText(/Login/)).toBeInTheDocument();
    expect(await screen.findByText(/Click to signup/)).toBeInTheDocument();
    fireEvent.click(await screen.findByText(/Click to signup/));
    expect(screen.queryByText(/Click to signup/)).toBeNull();
    expect(await screen.findByText(/Getting started/)).toBeInTheDocument();
    expect(await screen.findByText(/full name:/)).toBeInTheDocument();
    expect(await screen.findByText(/Existing User?/)).toBeInTheDocument();
    expect(await screen.findByText(/Click to login/)).toBeInTheDocument();
  });
});
