import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  OnboardingGenderStep,
  OnboardingMetricsStep,
  OnboardingUsernameStep,
} from '../../onboarding';

const Onboarding = createStackNavigator();

const OnboardingStack = () => (
  <Onboarding.Navigator initialRouteName="nameStep">
    <Onboarding.Screen name="nameStep" component={OnboardingUsernameStep} />
    <Onboarding.Screen name="genderStep" component={OnboardingGenderStep} />
    <Onboarding.Screen name="metricsStep" component={OnboardingMetricsStep} />
  </Onboarding.Navigator>
);

export default OnboardingStack;
