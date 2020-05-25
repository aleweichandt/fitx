import React from 'react';
import {ReduxNavigationContainer} from '../../navigation';
import LoginStack from './LoginStack';

const AppNavigator = () => (
  <ReduxNavigationContainer>
    <LoginStack />
  </ReduxNavigationContainer>
);

export default AppNavigator;
