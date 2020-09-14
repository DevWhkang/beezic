import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../screens/Intro';
import SignInStackNavigator from './SignInStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';

const Navigator = ():JSX.Element => {
  // TODO 아래 상태들 MobX로 리팩토링 필요
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  return (
    isLoading
      ? (
        <Intro loadingStateHandler={setIsLoading} loginStateHandler={setIsLogin} />
      )
      : (
        <NavigationContainer>
          {isLogin
            ? <MainDrawerNavigator />
            : <SignInStackNavigator /> }
        </NavigationContainer>
      )
  );
};

export default Navigator;
