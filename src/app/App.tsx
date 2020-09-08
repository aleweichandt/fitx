import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '../theme';
import {runSaga, store} from './model';
import rootSaga from './model/sagas';
import AppNavigator from './nav/AppNavigator';

const App = () => {
  useEffect(() => {
    runSaga(rootSaga);
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
