import { FC, useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './loaderStyle.css';
import Auth from './Auth';

import { check } from '../http/userAPI';
import UserStore from '../store/userStore';
import LoggedUserView from './LoggedUserView';
import AuthController from '../controllers/authController';

const user = new UserStore();

const App: FC = observer(() => {
  const [loading, setLoading] = useState(true);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .catch((e) => {
        console.info(e);
      })
      .finally(() => setLoading((prev) => !prev));
  }, []);

  const toAuthUser = async (email: string, password: string, name?: string) => {
    const authController = new AuthController();
    if (isNewUser && name) {
      await authController.toRegister(email, password, name);
    } else {
      await authController.toLogin(email, password);
    }
    if (authController.errorMsg !== '') {
      setError(authController.errorMsg);
    } else {
      user.setUser(authController.user);
      user.setIsAuth(true);
    }
  };

  const toLogout = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    user.setIsAuth(false);
    user.setUser({});
    window.localStorage.setItem('token', '');
  };

  if (loading) {
    return (
      <div data-testid="loader" className="loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      {user.isAuth && <LoggedUserView toLogout={toLogout} userStore={user} />}
      {!user.isAuth && (
        <Auth
          setError={setError}
          error={error}
          setIsNewUser={setIsNewUser}
          isNewUser={isNewUser}
          toAuthUser={toAuthUser}
        />
      )}
    </>
  );
});

export default App;
