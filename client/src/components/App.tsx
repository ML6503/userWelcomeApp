import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import './loaderStyle.css';
import Auth from './Auth';
import { check } from '../http/userAPI';
import UserStore from '../store/userStore';
import LoggedUserView from './LoggedUserView';

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
      {!user.isAuth && <Auth user={user} />}
    </>
  );
});

export default App;
