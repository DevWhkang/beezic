import React from 'react';
import { View } from 'react-native';
import styled, { css } from '@emotion/native';
import Swiper from 'react-native-swiper';

const Wrapper = css`
  {};
`;

const Box = styled.View`
  width: auto;
  height: 360px;
`;

const SwiperBox = css`
  flex:1;
  background-color: #9dd6eb;
`;

const ProfileTitle = styled.Text`
  margin: 30px;
  font-size: 30px;
  font-weight: bold;
  border-bottom-width:2px;
  border-bottom-color: #ff8a3d;
`;

const SaysHello = styled.Text`
font-size: 25px;
`;

const MiddleText = styled.Text`
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const LowText = styled.Text`
  margin-left: 40px;
  font-size: 20px;
  font-weight: bold;
`;

const MarginTop = styled.View`
  margin-top: 50px;
  margin-bottom: 30px;
`;

function Slide({ Username }: props) {
  return (
    <Box>
      <Swiper showsButtons style={Wrapper}>
        <View style={SwiperBox}>
          <ProfileTitle>
            {Username}
            {' '}
            님
            {' '}
            <SaysHello> 안녕하세요.</SaysHello>
          </ProfileTitle>
          <MiddleText>중고 직거래가 잡히셨나요 ?</MiddleText>
          <LowText>비직하기를 클릭해서</LowText>
          <LowText>직거래 대행을 시작해 보세요!</LowText>
        </View>
        <View style={SwiperBox}>
          <MarginTop>
            <MiddleText>Fun 하고 Cool 한 직거래대행</MiddleText>
            <MiddleText>Sexy하게 Beezic 지금 바로 시작하세요</MiddleText>
          </MarginTop>
        </View>
      </Swiper>
    </Box>
  );
}

export default Slide;
