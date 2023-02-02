import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Auth from '../components/Auth';
import UserStore from '../store/userStore';

describe('Auth component ', () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());

  it('should pass input values on change to form', async () => {
    const userStore = new UserStore();
    render(<Auth userStore={userStore} />);

    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('input-password'), {
      target: { value: 'SuperTestpasrd1$$$11_' },
    });
    fireEvent.change(screen.getByTestId('input-email'), { target: { value: 'test@email.com' } });

    const button = screen.getByRole('button', { name: /Login/i });
    expect(button).toBeInTheDocument();

    expect(form).toHaveFormValues({
      email: 'test@email.com',
      password: 'SuperTestpasrd1$$$11_',
    });
  });
});
