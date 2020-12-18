import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {needsOnboarding} from '../../onboarding';
import HomeTabs from './HomeTabs';
import OnboardingStack from './OnboardingStack';

const NeedsOnboarding = createStackNavigator();

const OnboardingSwitch = () => {
  const shouldOnboard = useSelector(needsOnboarding);
  return (
    <NeedsOnboarding.Navigator>
      {shouldOnboard ? (
        <NeedsOnboarding.Screen name="onboarding" component={OnboardingStack} />
      ) : (
        <NeedsOnboarding.Screen name="home" component={HomeTabs} />
      )}
    </NeedsOnboarding.Navigator>
  );
};

export default OnboardingSwitch;
