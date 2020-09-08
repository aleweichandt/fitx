import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import styled from 'styled-components/native';
import UserLogoutButton from '../../login/container/UserLogoutButton';

const Home = createStackNavigator();

//Mock main
const Container = styled.View`
  background-color: ${(props) => props.theme.color.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Mock = () => (
  <Container>
    <UserLogoutButton />
  </Container>
);

const HomeStack = () => (
  <Home.Navigator initialRouteName="main">
    <Home.Screen name="main" component={Mock} />
  </Home.Navigator>
);

export default HomeStack;
