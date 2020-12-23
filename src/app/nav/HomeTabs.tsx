import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {UserProfileScreen} from '../../profile';
import HomeStack from './HomeStack';

const Home = createBottomTabNavigator();

const HomeTabs = () => (
  <Home.Navigator initialRouteName="home">
    <Home.Screen name="home" component={HomeStack} />
    <Home.Screen name="profile" component={UserProfileScreen} />
  </Home.Navigator>
);

export default HomeTabs;
