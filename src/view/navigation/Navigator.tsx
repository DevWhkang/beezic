import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../screens/Intro';
import Main from '../screens/Main';
import SigninStackNavigator from './SigninStackNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName="Main" headerMode="none">
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
);

const Navigator = ():JSX.Element => {
  // TODO 아래 상태들 MobX로 리팩토링 필요
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    isLoading
      ? (
        <Intro loadingStateHandler={setIsLoading} loginStateHandler={setIsLogin} />
      )
      : (
        <NavigationContainer>
          {isLogin
            ? <MainStackNavigator />
            : <SigninStackNavigator /> }
        </NavigationContainer>
      )
  );
};

export default Navigator;
