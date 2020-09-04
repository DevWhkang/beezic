import React from 'react';
import styled from '@emotion/native';
import TextInput from '../components/TextInput.tsx';
import Button from '../components/Button.tsx';
import LinkText from '../components/LinkText.tsx';
import OauthIcons from '../components/OAuthIcons.tsx';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const TitleText = styled.Text`
  font-size: 60px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-bottom: 40px;
`;

const Magin = styled.View`
  margin-bottom: 25px;
`;

const SmallMagin = styled.View`
  margin-bottom: 10px;
`;

function SignUp() {
  return (
    <>
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <Magin><TextInput label="Username" /></Magin>
      <Magin><TextInput label="Password" /></Magin>
      <Magin><TextInput label="Check Password" /></Magin>
      <Magin><Button title="Sign up" /></Magin>
      <SmallMagin><LinkText content="Already have an acount ?" /></SmallMagin>
      <OauthIcons />
    </>
  );
}

export default SignUp;
