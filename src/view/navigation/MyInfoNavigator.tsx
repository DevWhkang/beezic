import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyInfo from '../screens/MyInfo';
import EditMyinfo from '../screens/EditMyInfo';
import EditInfoDetail from '../screens/EditMyInfoDetail';
import DetailDirectTransactions from '../screens/DetailTransactions';

const Stack = createStackNavigator();

const MyInfoStackNavigator = ():JSX.Element => (
  <Stack.Navigator initialRouteName="MyInfo" headerMode="none">
    <Stack.Screen name="MyInfo" component={MyInfo} />
    <Stack.Screen name="EditMyinfo" component={EditMyinfo} />
    <Stack.Screen name="EditInfoDetail" component={EditInfoDetail} />
    <Stack.Screen name="DetailDirectTransactions" component={DetailDirectTransactions} />
  </Stack.Navigator>
);

const MyInfoNavigator = ():JSX.Element => (
  <NavigationContainer>
    <MyInfoStackNavigator />
  </NavigationContainer>
);

export default MyInfoNavigator;
