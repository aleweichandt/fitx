import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

type Props = {
  isLoggedIn: boolean;
};

const Root = createStackNavigator();

const RootStack = ({isLoggedIn}: Props) => (
  <Root.Navigator initialRouteName="root">
    {isLoggedIn ? (
      <Root.Screen name="home" component={HomeStack} />
    ) : (
      <Root.Screen name="auth" component={AuthStack} />
    )}
  </Root.Navigator>
);

export default RootStack;
