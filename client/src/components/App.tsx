import { FC, useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../store/userStore';
import UserView from './UserView';
import WelcomeAnimation from './WelcomeAnimation';
import { AppContext } from '../index';

const App: FC = observer(() => {
  // const [isAnim, setIsAnim] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsAnim((prev) => !prev);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);
  const appContext = useContext(AppContext);
  // const userStore = new UserStore();
  // userStore.setUser({
  //   email: 'test@mail.com',
  //   password: 'passowrd1234!',
  //   name: 'New User',
  // });
  const appUserName = appContext?.user.name;
  console.log('appUser name: ', appUserName === '');
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
      {!isLoggedIn && <UserView />}
    </>
  );
});

export default App;
