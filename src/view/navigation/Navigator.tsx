import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Intro from '../screens/Intro';
import Main from '../screens/Main';

const Stack = createStackNavigator();

const SigninStackNavigator = () => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen name="Signin" component={SignIn} />
  </Stack.Navigator>
);
const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main" headerMode="none">
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
);

const Navigator = ():JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  return (
    isLoading
      ? (
        <Intro loadingStateHandler={setIsLoading} loginStateHandler={setIsLogin} />
      )
      : (
        <NavigationContainer>
          {isLogin ? <MainStackNavigator /> : <SigninStackNavigator /> }
        </NavigationContainer>
      )
  );
};

export default Navigator;
