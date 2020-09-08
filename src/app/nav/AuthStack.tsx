import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen} from '../../login';

const Auth = createStackNavigator();

const AuthStack = () => (
  <Auth.Navigator initialRouteName="login">
    <Auth.Screen name="login" component={LoginScreen} />
  </Auth.Navigator>
);

export default AuthStack;
