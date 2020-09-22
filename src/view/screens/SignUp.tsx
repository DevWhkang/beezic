import React from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { UserStore, ErrorStore } from '../../viewModel';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import BeezicLogo from '../../assets/Beezic_Logo_carrot.png';

const BackGround = css`
  background-color: #ECECEC;
  height: 100%;
  width: 100%;
`;

const View = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.View`
  margin: 20px 0px 20px 0px;
  background-color: white;
  border-color: #c8c8c8;
  border-width: 2px;
  border-radius: 10px;
  width:350px;
`;

const Container = styled.View`
  flex-direction: row;
  margin-top: 40px;
  align-self: center;
`;

const TitleText = styled.Text`
  font-size: 45px;
  font-family: 'Jua-Regular';
  color: #D2691E;
  margin-bottom: 20px;
`;

const InputStyle = css`
  margin-top: 5px;
`;

const BeeZicTextStyle = css`
  text-align:center;
  margin-bottom: 30px;
  color: #888;
  font-size: 18px;
`;

const buttonStyle = css`
  background-color: #fc8a3d;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 275px;
`;

const linkStyle = css`
  margin-bottom: 30px;
`;

const CarrotImage = styled.Image`
  margin-top: 10px;
`;
const scrollViewCss = css`
  flex-grow: 1;
  justify-content: center;
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

  const onSignUpButton = async () => {
    ErrorStore.reset();
    await UserStore.up();
  };

  const onLinkButton = () => {
    UserStore.resetInputValue();
    ErrorStore.reset();
    navigation.navigate('SignIn');
  };

  return useObserver(() => (
    <View style={BackGround}>
      <ScrollView contentContainerStyle={scrollViewCss} showsVerticalScrollIndicator={false}>
        <Box>
          <Container>
            <TitleText>회원 가입</TitleText>
            <CarrotImage source={BeezicLogo} />
          </Container>
          <Text style={BeeZicTextStyle}>비직으로 직거래 대행을 시작하세요</Text>
          <TextInput
            viewStyle={InputStyle}
            onChangeText={onChangeEmail}
            placeholder="이메일을 작성해주세요!"
            regex={/[a-z0-9.@]/gi}
            message={ErrorStore.message('email', '이메일 형식이 아니에요!')}
          />
          <TextInput
            viewStyle={InputStyle}
            labelStyle={{ fontSize: 0 }}
            onChangeText={onChangeUsername}
            placeholder="이름도 좋고 별명도 좋아요!"
            regex={/[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/gi}
          />
          <TextInput
            viewStyle={InputStyle}
            labelStyle={{ fontSize: 0 }}
            onChangeText={onChangePassword}
            placeholder="6자리 이상 작성해주세요!"
            message={ErrorStore.message('password', '비밀번호가 너무 짧아요!')}
            password
          />
          <TextInput
            viewStyle={InputStyle}
            labelStyle={{ fontSize: 0 }}
            onChangeText={onChangePasswordCheck}
            placeholder="한 번 더 작성해주세요!"
            message={((UserStore.password && UserStore.passwordCheck))
            && (UserStore.checkPassword()
              ? '제대로 작성하셨네요!'
              : '음... 다시 한 번 작성해주실래요?')}
            password
          />
          <Button
            title="비직 가입하기"
            background={buttonStyle}
            onPress={onSignUpButton}
            disabled={
              !UserStore.email.match(/^\w+\.?\w+@\w+\.\w+\.?\w+$/g)
              || !(UserStore.checkIfAllValuesFilled()
              && UserStore.checkPassword())
        }
          />
        </Box>
        <LinkText
          content="계정이 있으신가요 ?"
          onPress={onLinkButton}
          style={linkStyle}
        />
      </ScrollView>
    </View>
  ));
};
export default SignUp;
