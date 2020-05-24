import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import LoginStack from './LoginStack';

const AppNavigator = () => (
  <NavigationContainer>
    <LoginStack />
  </NavigationContainer>
);

export default AppNavigator;
