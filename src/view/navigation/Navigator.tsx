import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import Intro from '../screens/Intro';
import SignInStackNavigator from './SignInStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';
import { UserStore } from '../../viewModel';

const Navigator = ():JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  return useObserver(() => (
    isLoading
      ? (
        <Intro loadingStateHandler={setIsLoading} />
      )
      : (
        <NavigationContainer>
          {UserStore.isLogin && !!UserStore.user
            ? <MainDrawerNavigator />
            : <SignInStackNavigator /> }
        </NavigationContainer>
      )
  ));
};

export default Navigator;
