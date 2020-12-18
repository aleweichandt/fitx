import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeStack from './HomeStack';

const Home = createBottomTabNavigator();

const HomeTabs = () => (
  <Home.Navigator initialRouteName="home">
    <Home.Screen name="home" component={HomeStack} />
  </Home.Navigator>
);

export default HomeTabs;
