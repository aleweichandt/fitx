import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loggedUser, loggingIn, loginRequest, logout} from '../model';
import LoginScreen from '../view/LoginScreen';

const UserLoginScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(loggedUser);
  const locked = useSelector(loggingIn);
  const onLogin = () => dispatch(loginRequest({}));
  const onLogout = () => dispatch(logout());
  return (
    <LoginScreen
      user={user}
      locked={locked}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  );
};

export default UserLoginScreen;
