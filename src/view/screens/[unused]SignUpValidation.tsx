import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { UserStore, SignStore, ErrorStore } from '../../viewModel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OauthIcons from '../components/OAuthIcons';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const TitleText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-bottom: 40px;
`;

const ValidText = styled.Text`
  text-align: center;
  font-size: 15px;
  margin-bottom:15px;
`;

const margin30px = css`
  margin-bottom: 30px;
`;

const buttonStyle = css`
  background-color: #fc8a3d;
  margin-bottom: 30px;
`;

const errorTextStyle = css`
  font-size: 16px;
  color: red;
  align-self: center;
`;

const SignUpValidation = (): JSX.Element => {
  const [isSendTouched, setIsSendTouched] = useState(false);
  const [isVerifyTouched, setIsVerifyTouched] = useState(false);

  const onChangeEmail = (email: string) => {
    SignStore.email = email;
  };

  const sendButton = () => {
    UserStore.sendLink(() => {
      setIsSendTouched(true);
    });
  };

  const verifyButton = () => {
    setIsVerifyTouched(true);
    UserStore.checkVerification();
  };

  const onLinkButton = () => {
    SignStore.delete();
  };

  // TEMP
  const signOutButton = () => {
    SignStore.out();
  };

  return useObserver(() => (
    <ScrollView>
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <TextInput
        label="Email"
        title="Send"
        onChangeText={onChangeEmail}
        viewStyle={margin30px}
        onPress={sendButton}
        disabled={!SignStore.email}
      />
      <Text style={errorTextStyle}>{ErrorStore.short}</Text>
      {SignStore.isVerified(isVerifyTouched) && (
        <ValidText>Not yet. Please, check your email box.</ValidText>
      )}
      <Button
        title={SignStore.isVerified(isVerifyTouched) ? 'Next' : 'Verify'}
        background={buttonStyle}
        onPress={verifyButton}
        disabled={!!ErrorStore.error || !isSendTouched}
      />
      <Button
        title="Sign Out(Temp)"
        onPress={signOutButton}
        disabled={!UserStore.user}
      />
      <LinkText
        content="Do you already have an account?"
        style={margin30px}
        onPress={onLinkButton}
      />
      <OauthIcons />
    </ScrollView>
  ));
};

export default SignUpValidation;
