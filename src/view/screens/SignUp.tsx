import React from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { UserStore, ErrorStore } from '../../viewModel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OAuthIcons from '../components/OAuthIcons';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const TitleText = styled.Text`
  font-size: 60px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-bottom: 20px;
`;

const InputStyle = css`
  margin-top: 5px;
`;

const buttonStyle = css`
  background-color: #fc8a3d;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const linkStyle = css`
  margin-bottom: 30px;
`;

const oauthStyle = css`
  margin-bottom: 30px;
`;

const SignUp = (): JSX.Element => {
  const navigation = useNavigation();
  const onChangeEmail = (email: string) => {
    UserStore.email = email;
  };
  const onChangeUsername = (username: string) => {
    UserStore.username = username;
  };
  const onChangePassword = (password: string) => {
    UserStore.password = password;
  };
  const onChangePasswordCheck = (passwordCheck: string) => {
    UserStore.passwordCheck = passwordCheck;
  };

  const onSignUpButton = () => {
    ErrorStore.reset();
    UserStore.up();
  };

  const onLinkButton = () => {
    UserStore.resetInputValue();
    ErrorStore.reset();
    navigation.navigate('SignIn');
  };

  return useObserver(() => (
    <ScrollView>
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <TextInput
        viewStyle={InputStyle}
        onChangeText={onChangeEmail}
        placeholder="이메일을 작성해주세요!"
        regex={/[a-z0-9.@]/gi}
        label="Email"
        message={ErrorStore.message('email', '이메일 형식이 아니에요!')}
      />
      <TextInput
        viewStyle={InputStyle}
        onChangeText={onChangeUsername}
        placeholder="이름도 좋고 별명도 좋아요!"
        regex={/[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/gi}
        label="Username"
      />
      <TextInput
        viewStyle={InputStyle}
        onChangeText={onChangePassword}
        placeholder="6자리 이상 작성해주세요!"
        label="Password"
        message={ErrorStore.message('password', '비밀번호가 너무 짧아요!')}
        password
      />
      <TextInput
        viewStyle={InputStyle}
        onChangeText={onChangePasswordCheck}
        label="Check Password"
        placeholder="한 번 더 작성해주세요!"
        message={((UserStore.password && UserStore.passwordCheck))
          && (UserStore.checkPassword()
            ? '제대로 작성하셨네요!'
            : '음... 다시 한 번 작성해주실래요?')}
        password
      />
      <Button
        title="Sign up"
        background={buttonStyle}
        onPress={onSignUpButton}
        disabled={
          !UserStore.checkIfAllValuesFilled()
          || !UserStore.checkPassword()
        }
      />
      <LinkText
        content="Do you already have an account?"
        onPress={onLinkButton}
        style={linkStyle}
      />
      <OAuthIcons
        style={oauthStyle}
      />
    </ScrollView>
  ));
};
export default SignUp;
