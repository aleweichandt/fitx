import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loggingIn, loginRequest} from '../model';
import LoginScreen from '../view/LoginScreen';

const UserLoginScreen = () => {
  const dispatch = useDispatch();
  const locked = useSelector(loggingIn);
  const onLogin = () => dispatch(loginRequest({}));
  return <LoginScreen locked={locked} onLogin={onLogin} />;
};

export default UserLoginScreen;
