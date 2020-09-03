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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-bottom: 80px;
`;

const VaildText = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-bottom:15px;
`;

const Magin = styled.View`
  margin-bottom: 35px;
`;

const SmallMagin = styled.View`
  margin-bottom: 10px;
`;

function vaildScreen({ isVerified } : props) {
  return (
    <>
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <Magin><TextInput label="Email" title="Send Code" /></Magin>
      <Magin><TextInput label="Verify Code" title="Submit" /></Magin>
      <VaildText>
        {
          isVerified ? 'Verified!' : '' // verrify 인증이 여부로 text 표현 수정사항
        }
      </VaildText>
      <Button title="Next" />
      <SmallMagin><LinkText content="Already have an account ?" /></SmallMagin>
      <OauthIcons />
    </>
  );
}

export default vaildScreen;
