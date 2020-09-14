import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../screens/MainMenuBar';
import MainStackNavigator from './MainStackNavigator';
import MyInfoStackNavigator from './MyInfoNavigator';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = ():JSX.Element => (
  <Drawer.Navigator initialRouteName="MainStackNavigator" drawerContent={MainMenu}>
    <Drawer.Screen name="MainMenu" component={MainMenu} />
    <Drawer.Screen name="MainStackNavigator" component={MainStackNavigator} />
    <Drawer.Screen name='MyInfoStackNavigator' component={MyInfoStackNavigator}/>
  </Drawer.Navigator>
);

export default MainDrawerNavigator;
