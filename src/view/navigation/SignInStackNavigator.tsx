import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
// import SignUpValidation from '../screens/SignUpValidation';

const Stack = createStackNavigator();

const SignInStackNavigator = (): JSX.Element => (
  <Stack.Navigator initialRouteName="SignIn" headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    {/* <Stack.Screen name="SignUpValidation" component={SignUpValidation} /> */}
  </Stack.Navigator>
);

export default SignInStackNavigator;
