import React from 'react';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import Hamburger1 from '../../../assets/Hamburger1.png';

const HeaderTopWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
`;

const HamburgerStyle = css`
  width: 30px;
  height: 30px;
`;

const HeaderTopMenu = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <HeaderTopWrapper
      onPress={() => navigation.openDrawer()}
    >
      <Image source={Hamburger1} style={HamburgerStyle} />
    </HeaderTopWrapper>
  );
};
export default HeaderTopMenu;
