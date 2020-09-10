import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LinkText from '../components/LinkText';
import OauthIcons from '../components/OAuthIcons';
import HeaderTopBack from '../components/MyInfo/HeaderTopBack';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
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

const SignUp = ():JSX.Element => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <HeaderTopBack />
      <Container>
        <TitleText>Sign Up</TitleText>
      </Container>
      <Margin><TextInput label="Username" /></Margin>
      <Margin><TextInput label="Password" password /></Margin>
      <Margin><TextInput label="Check Password" password /></Margin>
      <Margin>
        <Button
          title="Sign up"
          // TODO 회원가입을 위한 이름 비밀번호 체크 로직 아래 onPress에서 작성
          onPress={() => navigation.navigate('SignUpValidation')}
        />
      </Margin>
      <SmallMargin><LinkText onPress={() => navigation.navigate('SignIn')} content="Already have an acount ?" /></SmallMargin>
      <OauthIcons />
    </ScrollView>
  );
};
export default SignUp;
