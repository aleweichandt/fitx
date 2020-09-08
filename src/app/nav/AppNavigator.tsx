import React from 'react';
import {useSelector} from 'react-redux';
import {ReduxNavigationContainer} from '../../navigation';
import {isLoggedIn} from '../../user';
import RootStack from './RootStack';

const AppNavigator = () => {
  const hasUser = useSelector(isLoggedIn);
  return (
    <ReduxNavigationContainer>
      <RootStack isLoggedIn={hasUser} />
    </ReduxNavigationContainer>
  );
};

export default AppNavigator;
