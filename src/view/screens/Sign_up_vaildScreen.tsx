import React from 'react';
import styled from '@emotion/native';
import TextBox from '../components/TextInput.tsx';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const TitleText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-bottom: 100px;
`;

function vaildScreen() {
  return (
    <>
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <TextBox textName="Email" buttonName="Send Code" />
      <TextBox textName="Verify Code" buttonName="Submit" />
    </>
  );
}

export default vaildScreen;
