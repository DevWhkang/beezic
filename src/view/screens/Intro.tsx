import React, { useEffect } from 'react';
import styled, { css } from '@emotion/native';
import { Animated } from 'react-native';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import UserStore from '../../viewModel/UserStore';
import logo from '../../assets/Beezic_Logo.png';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Logo = styled.Image`
  width: 350px;
  height: 200px;
  margin-bottom: 220px;
`;

const MainText = styled.Text`
  font-size: 25px;
  font-family: 'Jua-Regular';
  color: #333;
`;
type IntroPropTypes = {
  loadingStateHandler: ()=>void,
  loginStateHandler: () => void,
};

function Intro({ loadingStateHandler, loginStateHandler }:IntroPropTypes): JSX.Element {
  const animation = new Animated.Value(1);
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animationStyle = {
    opacity: animation,
  };

  useEffect(() => {
    (new Promise((res) => {
      startAnimation();
      setTimeout(() => {
        res();
      }, 1000);
    }).then(() => {
      // TODO 나중에 여기서 로그인 상태확인 후 아래 메소드 처리

      UserStore.checkSignIn((isSignedIn) => {
        if (isSignedIn) {
          // TODO Write Navigator Code: Main
        } else {
          // TODO Write Navigator Code: SignIn
        }
      });
      loadingStateHandler(false);
    }));
  });
  return (
    <>
      <Animated.View style={[animationStyle]}>
        <Container>
          <Logo source={logo} />
          <MainText>판매도 구매도</MainText>
          <MainText>대신 해드릴게요.</MainText>
        </Container>
      </Animated.View>
    </>
  );
}

export default Intro;
