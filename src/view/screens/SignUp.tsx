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
  font-size: 60px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-bottom: 40px;
`;

const Margin = styled.View`
  margin-bottom: 25px;
`;

const SmallMargin = styled.View`
  margin-bottom: 10px;
`;

const SignUp = ():JSX.Element => (
  <>
    <Container>
      <TitleText>Sign Up</TitleText>
    </Container>
    <Margin><TextInput label="Username" /></Margin>
    <Margin><TextInput label="Password" password /></Margin>
    {/* FIXME 작성 시 키보드에 가려지는 문제 해결 필요 */}
    <Margin><TextInput label="Check Password" password /></Margin>
    <Margin><Button title="Sign up" /></Margin>
    <SmallMargin><LinkText content="Already have an acount ?" /></SmallMargin>
    <OauthIcons />
  </>
);

export default SignUp;
