import React from 'react';
import styled from '@emotion/native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OauthIcons from '../components/OAuthIcons';

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

const ValidText = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-bottom:15px;
`;

const Margin = styled.View`
  margin-bottom: 35px;
`;

const SmallMargin = styled.View`
  margin-bottom: 10px;
`;

function validScreen({ isVerified } : props): JSX.Element {
  return (
    <>
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <Margin><TextInput label="Email" title="Send Code" /></Margin>
      <Margin><TextInput label="Verify Code" title="Submit" /></Margin>
      <ValidText>
        {
          isVerified ? 'Verified!' : '' // verify 인증이 여부로 text 표현 수정사항
        }
      </ValidText>
      <Button title="Next" />
      <SmallMargin><LinkText content="Already have an account ?" /></SmallMargin>
      <OauthIcons />
    </>
  );
}

export default validScreen;
