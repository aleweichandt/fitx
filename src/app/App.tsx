import React from 'react';
import {Provider} from 'react-redux';
import {store} from './model';
import AppNavigator from './nav/AppNavigator';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
