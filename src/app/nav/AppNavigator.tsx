import React from 'react';
import {ReduxNavigationContainer} from '../../navigation';
import AuthSwitch from './AuthSwitch';

const AppNavigator = () => (
  <ReduxNavigationContainer>
    <AuthSwitch />
  </ReduxNavigationContainer>
);

export default AppNavigator;
