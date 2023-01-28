import React, { FC } from 'react';

import Login from './Login';

const UserView: FC = () => {
  return (
    <div className="user-view-wrapper">
      <div className="user-view">
        <Login />
      </div>
    </div>
  );
};

export default UserView;
