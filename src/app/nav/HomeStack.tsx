import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import OnboardingUsernameStep from '../../onboarding/container/OnboardingUsernameStep';
import Mock from '../MockScreen';

const Home = createStackNavigator();

const HomeStack = () => (
  <Home.Navigator initialRouteName="onboarding">
    <Home.Screen name="onboarding" component={OnboardingUsernameStep} />
    <Home.Screen name="main" component={Mock} />
  </Home.Navigator>
);

export default HomeStack;
