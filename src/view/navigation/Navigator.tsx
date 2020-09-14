import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../screens/Intro';
import SignInStackNavigator from './SignInStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';
import { UserStore } from '../../viewModel';
import { useObserver } from 'mobx-react';

const Navigator = ():JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  return useObserver(() => (
    isLoading
      ? (
        <Intro loadingStateHandler={setIsLoading}  />
      )
      : (
        <NavigationContainer>
          {UserStore.isLogin
            ? <MainDrawerNavigator />
            : <SignInStackNavigator /> }
        </NavigationContainer>
      )
  )) 
};

export default Navigator;
