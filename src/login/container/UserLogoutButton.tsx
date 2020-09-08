import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loggingIn, logout} from '../model';
import LogoutButton from '../view/LogoutButton';

const UserLogoutButton = () => {
  const dispatch = useDispatch();
  const locked = useSelector(loggingIn);
  const onLogout = () => dispatch(logout());
  return <LogoutButton locked={locked} onLogout={onLogout} />;
};

export default UserLogoutButton;
