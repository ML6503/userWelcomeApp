import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Auth from '../../components/Auth';
import UserStore from '../../store/userStore';
import AuthController from '../../controllers/authController';

describe('EmailInput when render with email prop', () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());
  it('should pass it to input value on change', async () => {
    const user = new UserStore();
    const mockedSetUser = jest.spyOn(user, 'setUser');
    const mockedIsAuth = jest.spyOn(user, 'setIsAuth');
    mockedSetUser.mockImplementation(() => {});
    mockedIsAuth.mockImplementation(() => {});

    const authController = new AuthController(user);
    const mockedToRegister = jest.spyOn(authController, 'toRegister');
    const mockedToLogin = jest.spyOn(authController, 'toLogin');
    mockedToRegister.mockImplementation((name, email, password) => Promise.resolve());

    mockedToLogin.mockImplementation((email, password) => Promise.resolve());

    // render(<Auth
    //   setError={jest.fn(() => {})}
    //   error={''}
    //   setIsNewUser={jest.fn(() => {})}}
    //   isNewUser={}
    //   toAuthUser={jest.fn(() => {})} />);

    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('input-password'), {
      target: { value: 'SuperTestpasrd1$$$11_' },
    });
    fireEvent.change(screen.getByTestId('input-email'), { target: { value: 'test@email.com' } });

    fireEvent.submit(form);

    screen.debug();
    expect(mockedToLogin).toHaveBeenCalledTimes(1);
  });
});
