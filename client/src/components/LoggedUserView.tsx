import React from 'react';
import { IUser } from 'utils/interface';
import WelcomeAnimation from './WelcomeAnimation';
import UserStore from '../store/userStore';

interface ILoggedUserViewProps {
  userStore: UserStore;
  toLogout: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const LoggedUserView: React.FC<ILoggedUserViewProps> = ({ toLogout, userStore }) => {
  return (
    <div className="welcome-user-wrapper">
      <WelcomeAnimation />
      <div className="username-wrapper">
        <span data-testid="signed-username"> {(userStore.user as IUser).name}! </span>
        <span className="logout-span-container">
          To logout click{' '}
          <span data-testid="logout-here" className="logout-span" onClick={toLogout}>
            here
          </span>
        </span>
      </div>
    </div>
  );
};

export default LoggedUserView;
