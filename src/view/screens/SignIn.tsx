import React from 'react';
import styled, { css } from '@emotion/native';
import { Image, Text } from 'react-native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { UserStore, ErrorStore } from '../../viewModel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OAuthIcons from '../components/OAuthIcons';
import BeezicLogo from '../../assets/Beezic_Logo_carrot.png';
import Line from '../../assets/line.png';

const BackGround = css`
  background-color: #ECECEC;
  height: 100%;
  width: 100%;
`;

const Box = styled.View`
  margin: 20px 0px 20px 0px;
  background-color: white;
  border-color: #c8c8c8;
  border-width: 2px;
  border-radius: 10px;
  width:350px;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 30px;
  align-self: center;
`;

const TextLine1 = styled.View`
  flex-direction: row;
  align-self: center;
  margin-bottom: 15px;
`;

const TextLine = css`
  width: 50px;
  height: auto;
`;

const GrayText = css`
  color: #888;
`;

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.Text`
  font-size: 45px;
  color: #D2691E;
  font-family: 'BMDOHYEON';
`;

const emailInputStyle = css`
  width:300px;
`;

const passwordInputStyle = css`
  width:300px;
`;

const linkTextStyle = css`
  margin-bottom: 20px;
`;

const buttonStyle = css`
  margin-bottom: 30px;
  background-color: #fc8a3d;
  width: 275px;
`;

const oauthStyle = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

const errorTextStyle = css`
  color: red;
`;

const CarrotImage = styled.Image`
  margin-top: 10px;
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
    <View style={BackGround}>
      <Box>
        <HeaderWrapper>
          <Header>안녕하세요</Header>
          <CarrotImage source={BeezicLogo} />
        </HeaderWrapper>
        <TextInput
          onChangeText={onChangeEmail}
          placeholder="이메일을 입력해 주세요"
          textInputStyle={emailInputStyle}
          email
        />
        <TextInput
          onChangeText={onChangePassword}
          placeholder="비밀번호를 입력해 주세요"
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
        <TextLine1>
          <Image source={Line} style={TextLine} />
          <Text style={GrayText}>  또는  </Text>
          <Image source={Line} style={TextLine} />
        </TextLine1>
        <LinkText
          content="계정이 없으신가요 ?"
          onPress={onLinkButton}
          style={linkTextStyle}
        />
      </Box>
      <OAuthIcons style={oauthStyle} />
    </View>
  ));
};

export default SignIn;
