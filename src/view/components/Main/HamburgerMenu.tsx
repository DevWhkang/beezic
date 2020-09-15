import React from 'react';
import styled from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const HeaderMenu = styled.TouchableOpacity`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

type HamburgerMenuPropTypes = {
  navigation: StackNavigationProp,
}

function HamburgerMenu(): JSX.Element {
  const navigation = useNavigation();
  return (
    <HeaderMenu onPress={() => navigation.openDrawer()}>
      <FontAwesomeIcon
        color="#aaa"
        size={40}
        icon={faBars}
      />
    </HeaderMenu>
  );
}

export default HamburgerMenu;
