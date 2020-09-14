import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyInfo from '../screens/MyInfo';
import EditMyInfo from '../screens/EditMyInfo';
import EditInfoDetail from '../screens/EditMyInfoDetail';
import DetailDirectTransactions from '../screens/DetailTransactions';

const Stack = createStackNavigator();

const MyInfoStackNavigator = (): JSX.Element => (
  <Stack.Navigator initialRouteName="MyInfo" headerMode="none">
    <Stack.Screen name="MyInfo" component={MyInfo} />
    <Stack.Screen name="EditMyInfo" component={EditMyInfo} />
    <Stack.Screen name="EditInfoDetail" component={EditInfoDetail} />
    <Stack.Screen name="DetailDirectTransactions" component={DetailDirectTransactions} />
  </Stack.Navigator>
);
// Test 용 네비 App 에서 test 가능
const TestMyInfoNavigator = (): JSX.Element => (
  <NavigationContainer>
    <MyInfoStackNavigator />
  </NavigationContainer>
);

export default MyInfoStackNavigator;
