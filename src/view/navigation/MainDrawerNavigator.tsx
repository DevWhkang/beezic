import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { css } from '@emotion/native';
import MainMenu from '../screens/MainMenuBar';
import MainStackNavigator from './MainStackNavigator';
import MyInfoStackNavigator from './MyInfoNavigator';

const Drawer = createDrawerNavigator();
const drawerCss = css`
  border-radius: 0 30px 30px 0;
  padding: 20px 10px 0 10px;
  width: 80%;

`;
const MainDrawerNavigator = ():JSX.Element => (
  <Drawer.Navigator drawerStyle={drawerCss} initialRouteName="MainStackNavigator" drawerContent={MainMenu}>
    <Drawer.Screen name="MainMenu" component={MainMenu} />
    <Drawer.Screen name="MainStackNavigator" component={MainStackNavigator} />
    <Drawer.Screen name="MyInfoStackNavigator" component={MyInfoStackNavigator} />
  </Drawer.Navigator>
);

export default MainDrawerNavigator;
