import { FC, useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './loaderStyle.css';
import WelcomeAnimation from './WelcomeAnimation';
// import { AppContext } from '../index';
import Auth from './Auth';
import { IUser } from 'utils/interface';
import { check } from '../http/userAPI';
import UserStore from '../store/userStore';

const user = new UserStore();

const App: FC = observer(() => {
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="loader-wrapper">
        <span className="loader"></span>
      </div>
    );
  }

  const toLogout = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    user.setIsAuth(false);
    user.setUser({});
    window.localStorage.setItem('token', '');
  };

  const LoggedUserView = () => {
    return (
      <div className="welcome-user-wrapper">
        <WelcomeAnimation />
        <div className="username-wrapper">
          <span> {(user.user as IUser).name}! </span>
          <span className="logout-span-container">
            To logout click{' '}
            <span className="logout-span" onClick={toLogout}>
              here
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      {user.isAuth && <LoggedUserView />}
      {!user.isAuth && <Auth userStore={user} />}
    </>
  );
});

export default App;
