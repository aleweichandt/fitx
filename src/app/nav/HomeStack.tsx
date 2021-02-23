import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {RoutineExercisesList} from '../../exercises';
import {UserLogoutButton} from '../../login';
import {UserRoutinesList} from '../../routines';
// import Mock from '../MockScreen';

const Home = createStackNavigator();

const HomeStack = () => {
  const headerRightLogout = useCallback(() => <UserLogoutButton />, []);
  return (
    <Home.Navigator initialRouteName="main">
      <Home.Screen
        name="main"
        component={UserRoutinesList}
        options={{
          headerRight: headerRightLogout,
        }}
      />
      <Home.Screen name="routineExercises" component={RoutineExercisesList} />
    </Home.Navigator>
  );
};

export default HomeStack;
