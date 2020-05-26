import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '../theme';
import {store} from './model';
import AppNavigator from './nav/AppNavigator';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  </Provider>
);

export default App;
