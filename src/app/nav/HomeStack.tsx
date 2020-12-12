import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Mock from '../MockScreen';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="onboardingName">
    <Home.Screen name="main" component={Mock} />
  </Home.Navigator>
);

export default HomeStack;
