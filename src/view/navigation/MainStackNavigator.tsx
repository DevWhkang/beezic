import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';
import StaffAssignment from '../screens/StaffAssignment';
import TransactionInfo from '../screens/TransactionInfo';
import CheckList from '../screens/CheckList';

const Stack = createStackNavigator();

const MainStackNavigator = ():JSX.Element => (
  <Stack.Navigator initialRouteName="Main" headerMode="none">
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="TransactionInfo" component={TransactionInfo} />
    <Stack.Screen name="StaffAssignment" component={StaffAssignment} />
    <Stack.Screen name="CheckList" component={CheckList} />
  </Stack.Navigator>
);

export default MainStackNavigator;
