import React from 'react';
import styled from '@emotion/native';
import logo from '../../assets/beezic-logo.png';
import brand from '../../assets/Beezic.png';

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const Brand = styled.Image`
  width: 100%;
  aspectRatio: 4;
  margin-bottom: 150px;
`;

const MainText = styled.Text`
  font-size: 24px;
`;

function Intro() {
  return (
    <View>
      <Logo source={logo} />
      <Brand source={brand} />
      <MainText>판매도 구매도</MainText>
      <MainText>대신 해드릴게요.</MainText>
    </View>
  );
}

export default Intro;
