import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {isLoggedIn} from '../../user';
import AuthStack from './AuthStack';
import OnboardingSwitch from './OnboardingSwitch';

const NeedsAuth = createStackNavigator();

const AuthSwitch = () => {
  const hasUser = useSelector(isLoggedIn);
  return (
    <NeedsAuth.Navigator>
      {hasUser ? (
        <NeedsAuth.Screen name="home" component={OnboardingSwitch} />
      ) : (
        <NeedsAuth.Screen name="auth" component={AuthStack} />
      )}
    </NeedsAuth.Navigator>
  );
};

export default AuthSwitch;
