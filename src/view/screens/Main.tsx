import React from 'react';
import styled from '@emotion/native';
import { Alert } from 'react-native';
import Hamburger from '../components/Main/HamburgerMenu';
import Slide from '../components/Main/Slide';
import Button from '../components/Button';
import logo from '../../assets/Beezic_Logo.png';

const HeaderWrapper = styled.View`
position: relative;
padding: 10px;
bottom: -10;
width: 100%;
height: 60px;
display: flex;
flex-direction: row;
`;

const Margin = styled.View`
  margin-bottom: 60px;
`;

const Logo = styled.Image`
  width: 120px;
  height: 80px;
  align-self: center;
  margin-left: 80px;
  margin-top: 20px;
`;
function Main(): JSX.Element {
  return (
      <Margin>
        <HeaderWrapper>
          <Hamburger />
          <Logo source={logo} />
        </HeaderWrapper>
      </Margin>
      <Margin><Slide Username="임진성" /></Margin>
      <Button
        title="비직하기"
        onPress={() => Alert.alert('비직하기로 이동')}
      />
  );
}

export default Main;
