import React from 'react';
import styled, { css } from '@emotion/native';
import { Text } from 'react-native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { UserStore, ErrorStore } from '../../viewModel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OAuthIcons from '../components/OAuthIcons';

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.Text`
  font-size: 64px;
  margin-top: 60px;
  margin-bottom: 30px;
  font-family: 'BMDOHYEON';
`;

const emailInputStyle = css`
  margin-bottom: 30px;
`;

const passwordInputStyle = css`
  margin-bottom: 50px;
`;

const buttonStyle = css`
  margin-bottom: 30px;
  background-color: #fc8a3d;
`;

const oauthStyle = css`
  margin-top: 45px;
`;

const errorTextStyle = css`
  color: red;
`;

const SignIn = (): JSX.Element => {
  const navigation = useNavigation();

  const onChangeEmail = (email: string) => {
    UserStore.email = email;
  };
  const onChangePassword = (password: string) => {
    UserStore.password = password;
  };

  const onSignInButton = (): void => {
    ErrorStore.reset();
    UserStore.in();
  };

  const onLinkButton = (): void => {
    UserStore.checkSignIn((isSignedIn) => {
      if (isSignedIn) UserStore.out();
      navigation.navigate('SignUp');
    });
  };

  return useObserver(() => (
    <View>
      <Header>Welcome!</Header>
      <TextInput
        label="Email"
        onChangeText={onChangeEmail}
        placeholder="Enter your email address"
        textInputStyle={emailInputStyle}
      />
      <TextInput
        label="Password"
        onChangeText={onChangePassword}
        placeholder="Enter your password"
        textInputStyle={passwordInputStyle}
        password
      />
      <Button
        title="Sign In"
        background={buttonStyle}
        onPress={onSignInButton}
        disabled={!(UserStore.email && UserStore.password)}
      />
      {(!ErrorStore.error && UserStore.isLogin) && (
        // FIXME 모달
        <Text>로그인 성공</Text>
      )}
      {!!ErrorStore.error && (
        <Text style={errorTextStyle}>{ErrorStore.short}</Text>
      )}
      <LinkText
        content="Create an account"
        onPress={onLinkButton}
      />
      <OAuthIcons style={oauthStyle} />
    </View>
  ));
};

export default SignIn;
