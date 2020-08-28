import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LoginScreen} from '../../login';

const Stack = createStackNavigator();

const LoginStack = () => (
  <Stack.Navigator initialRouteName="login">
    <Stack.Screen name="login" component={LoginScreen} />
  </Stack.Navigator>
);

export default LoginStack;
