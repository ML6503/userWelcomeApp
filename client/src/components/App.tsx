import { FC, useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './loaderStyle.css';
import WelcomeAnimation from './WelcomeAnimation';
// import { AppContext } from '../index';
import Auth from './Auth';
import { IUser } from 'utils/interface';
import { check } from '../http/userAPI';
import UserStore from '../store/userStore';

const App: FC = observer(() => {
  const user = new UserStore();
  const [loading, setLoading] = useState(true);
  // const appContext = useContext(AppContext);
  // const isLoggedIn = appContext?.user.isAuth;
  const isLoggedIn = user.isAuth;

  useEffect(() => {
    check()
      .then((data) => {
        // appContext?.user.setUser(data);
        // appContext?.user.setIsAuth(true);
        user.setUser(data);
        user.setIsAuth(true);
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

  // const userStore = appContext?.user;
  // userStore!.setUser({
  //   email: 'test@mail.com',
  //   password: 'passowrd1234!',
  //   name: 'New User',
  // });

  const appUser = user.user;
  const appUserName = (appUser as IUser).name;
  console.log('appUser auth?: ', user.isAuth);

  const toLogout = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    // appContext?.user.setIsAuth(false);
    // appContext?.user.setUser({});
    user.setIsAuth(false);
    user.setUser({});
  };

  const loggedUserView = (
    <div className="welcome-user-wrapper">
      <WelcomeAnimation />
      <div className="username-wrapper">
        <span> {appUserName}! </span>
        <span className="logout-span-container">
          To logout click{' '}
          <span className="logout-span" onClick={toLogout}>
            here
          </span>
        </span>
      </div>
    </div>
  );

  return (
    <>
      {isLoggedIn && { loggedUserView }}
      {!isLoggedIn && <Auth />}
    </>
  );
});

export default App;
