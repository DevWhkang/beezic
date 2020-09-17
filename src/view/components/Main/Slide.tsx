import React from 'react';
import { View } from 'react-native';
import styled, { css } from '@emotion/native';
import Swiper from 'react-native-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Wrapper = css`
  {};
`;

const Font = css`
  font-family: 'Jua-Regular';
`;

const Box = styled.View`
  width: auto;
  height: 360px;
  border-width: 1px;
  border-radius: 20px;
  border-color: #d2d2d2;
`;

const dotStyle = css`
  background-color: #c8c8c8;
  width: 7;
  height: 7;
  border-radius: 7px;
  margin-left: 7;
  margin-right: 7;
  opacity: 0.6;
`;

const dotActiveStyle = css`
  background-color: #F5AF64;
  width: 7;
  height: 7;
  border-radius: 7px;
  margin-left: 7;
  margin-right: 7;
`;

const allowButtonStyle = css`
  color: #8c8c8c;
  opacity: 0.6;
`;

const SwiperBox = css`
  flex:1;
  background-color: #FFEFD5;
  border-radius: 20px;
`;

const ProfileTitle = styled.Text`
  margin: 30px;
  font-size: 30px;
  font-family: 'Jua-Regular';
  border-bottom-width:2px;
  border-bottom-color: #ff8a3d;
`;

const SaysHello = styled.Text`
  font-size: 25px;
`;

const ButtonStyle = css`
  background-color: #D2691E;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const MiddleText = styled.Text`
  margin-bottom: 30px;
  margin-left: 30px;
  font-family: 'Jua-Regular';
  font-size: 20px;
`;

const LowText = styled.Text`
  margin-left: 40px;
  font-size: 20px;
  font-family: 'Jua-Regular';
`;

const MarginTop = styled.View`
  margin-top: 50px;
  margin-bottom: 30px;
`;

function Slide({ Username }: props): JSX.Element {
  return (
    <Box>
      <Swiper
        showsButtons
        // showsPagination={false}
        loop
        dot={(<View style={dotStyle} />)}
        activeDot={(<View style={dotActiveStyle} />)}
        prevButton={(<FontAwesomeIcon size={20} icon={faAngleDoubleLeft} style={allowButtonStyle} />)}
        nextButton={(<FontAwesomeIcon size={20} icon={faAngleDoubleRight} style={allowButtonStyle} />)}
      >
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
          <LowText>지금 바로 직거래 대행을 시작해 보세요!</LowText>
        </View>
        <View style={SwiperBox}>
          <ProfileTitle>직거래에 고충을 겪는 분들 Beezic 을 추천 합니다.</ProfileTitle>
          <MiddleText>첫번째✅ 직거래 하고싶은데 시간이 없는 분  </MiddleText>
          <MiddleText>두번째✅ 모르는 사람을 직접 만나기 힘드신 분 </MiddleText>
          <MiddleText>세번째✅ 중고품을 검사 받고 싶은 분</MiddleText>
        </View>
      </Swiper>
    </Box>
  );
}

export default Slide;
