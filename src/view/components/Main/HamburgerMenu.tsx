import React from 'react';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import Hamburger1 from '../../../assets/Hamburger1.png';

const HeaderMenu = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

const HamburgerStyle = css`
  width: 30px;
  height: 30px;
`;

type HamburgerMenuPropTypes = {
  navigation: StackNavigationProp,
};

function HamburgerMenu(): JSX.Element {
  const navigation = useNavigation();
  return (
    <HeaderMenu onPress={() => navigation.openDrawer()}>
      {/* <FontAwesomeIcon
        color="#E56D29"
        size={30}
        icon={faBars}
      /> */}
      <Image source={Hamburger1} style={HamburgerStyle} />
    </HeaderMenu>
  );
}

export default HamburgerMenu;
