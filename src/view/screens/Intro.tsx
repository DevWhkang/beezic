import React from 'react';
import styled from '@emotion/native';
import logo from '../../assets/Beezic_Logo.png';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Logo = styled.Image`
  width: 350px;
  height: 200px;
  margin-bottom: 220px;
`;

const MainText = styled.Text`
  font-size: 25px;
  font-family: 'Jua-Regular';
  color: #333;
`;

function Intro() {
  return (
    <Container>
      <Logo source={logo} />
      <MainText>판매도 구매도</MainText>
      <MainText>대신 해드릴게요.</MainText>
    </Container>
  );
}

export default Intro;
