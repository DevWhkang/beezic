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

const Bottom = styled.View`
  margin-top: 30px;
  margin-bottom: 10px;
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
        <TextInput label="Email" title="Send Code" />
        <TextInput label="Verify Code" title="Submit" />
      </Container>
      <Bottom>
        <Button title="Next" />
        <LinkText content="Already have an account ?" />
      </Bottom>
      <OauthIcons />
    </>
  );
}

export default vaildScreen;
