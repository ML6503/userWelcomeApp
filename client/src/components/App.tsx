import { FC, useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import WelcomeAnimation from './WelcomeAnimation';
import { AppContext } from '../index';
import Auth from './Auth';
import { IUser } from 'utils/interface';

const App: FC = observer(() => {
  // const [isAnim, setIsAnim] = useState(false);
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsAnim((prev) => !prev);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);
  const appContext = useContext(AppContext);
  const isLoggedIn = appContext?.user.isAuth;

  // const userStore = appContext?.user;
  // userStore!.setUser({
  //   email: 'test@mail.com',
  //   password: 'passowrd1234!',
  //   name: 'New User',
  // });
  // const appUserName = appContext?.user.name;
  const appUser = appContext?.user.user;
  const appUserName = (appUser as IUser).name;
  console.log('appUser auth?: ', appContext?.user.isAuth);
  return (
    <>
      {/* {isAnim && <HelloAnimation />} */}
      {isLoggedIn && (
        <div className="welcome-user-wrapper">
          <WelcomeAnimation />
          <div className="username-wrapper">
            <span> {appUserName}! </span>
            <span className="logout-span">To logout click here</span>
          </div>
        </div>
      )}
      {!isLoggedIn && <Auth />}
    </>
  );
});

export default App;
