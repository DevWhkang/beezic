import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUpValidation from '../screens/SignUpValidation';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const SigninStackNavigator = ():JSX.Element => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="SignUpValidation" component={SignUpValidation} />
  </Stack.Navigator>
);

export default SigninStackNavigator;
