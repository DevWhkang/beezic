import React from 'react';
import styled, { css } from '@emotion/native';
import { Text } from 'react-native';
import { useObserver } from 'mobx-react';
import userStore from '../../viewModel/UserStore';
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

const SignIn = (): JSX.Element => {
  const onChangeEmail = (email: string): void => {
    userStore.email = email;
  };

  const onChangePassword = (password: string) => {
    userStore.password = password;
  };

  const onClickButton = () => {
    userStore.validateUser();
  };

  return useObserver(() => (
    <View>
      <Header>Welcome!</Header>
      <TextInput
        label="Email"
        // defaultValue={(() => {
        //   // DELETE ME
        //   const email = 'dev.jinyongp@gmail.com';
        //   userStore.email = email;
        //   return email;
        // })()}
        onChangeText={onChangeEmail}
        placeholder="Enter your email address"
        textInputStyle={emailInputStyle}
      />
      <TextInput
        label="Password"
        // defaultValue={(() => {
        //   // DELETE ME
        //   const password = 'beezic!@#';
        //   userStore.password = password;
        //   return password;
        // })()}
        onChangeText={onChangePassword}
        placeholder="Enter your password"
        textInputStyle={passwordInputStyle}
        password
      />
      <Button
        title="Sign In"
        background={buttonStyle}
        onPress={onClickButton}
        disabled={!(userStore.email && userStore.password)}
      />
      {userStore.isLogin && (
        // FIXME 모달
        <Text>로그인 성공</Text>
      )}
      {userStore.error['[auth/user-not-found]'] && (
        // FIXME 모달
        <Text>사용자 없음</Text>
      )}
      {userStore.error['[auth/invalid-email]'] && (
        // FIXME 모달
        <Text>옳지 않은 이메일 형식</Text>
      )}
      {userStore.error['[auth/wrong-password]'] && (
        // FIXME 모달
        <Text>패스워드 틀림</Text>
      )}
      <LinkText content="Create an account?" />
      <OAuthIcons style={oauthStyle} />
    </View>
  ));
};

export default SignIn;
