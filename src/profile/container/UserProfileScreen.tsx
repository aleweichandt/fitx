import React from 'react';
import {useSelector} from 'react-redux';
import {ProfileScreen} from '../view';
import {loggedUser, User} from '../../user';

type Props = {};

const mockUser: User = {uuid: '', name: undefined, metrics: undefined};

const UserProfileScreen = ({}: Props) => {
  const user: User = useSelector(loggedUser) || mockUser;
  return <ProfileScreen user={user} />;
};

export default UserProfileScreen;
