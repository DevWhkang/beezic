import React from 'react';
import { View } from 'react-native';
import styled, { css } from '@emotion/native';
import Swiper from 'react-native-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
/*
 * TODO: Props로 username, location, 거래시간 등 받아서 표기할게 많음 Component DDTSlide.tsx 파일도 포함
 */
type DDTSlideProps = {
  username: string,
  beezicler: string,
};

const Wrapper = css`
  {};
`;

const Box = styled.View`
  width: auto;
  height: 450px;
`;
const TextBox = styled.View`
  width: auto;
  height: 240px;
  background-color: #E0EEEE;
`;

const SwiperBox = css`
  flex:1;
  background-color: #9dd6eb;
`;

const MiddleText = styled.Text`
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const LowText = styled.Text`
  margin-left: 40px;
  font-size: 15px;
  font-weight: bold;
`;

const MarginTop = styled.View`
  margin-top: 50px;
  margin-bottom: 30px;
`;

const MiddleTitle = css`
  font-size: 30px;
`;

const BeeziclerCSS = css`
  align-self: center;
`;

const MarginTopText = css`
  margin-top: 30px;
`;

function DDTSlide({ username, beezicler }: DDTSlideProps): JSX.Element {
  return (
    <Box>
      <Swiper showsButtons style={Wrapper}>
        <View style={SwiperBox}>
          <MarginTop />
          <LowText>직거래 장소</LowText>
        </View>
        <View style={SwiperBox}>
          <MarginTop>
            <MiddleText style={MiddleTitle}>직거래 시간</MiddleText>
          </MarginTop>
          <MarginTop>
            <MiddleText style={MiddleTitle}>거래 금액 및 방법</MiddleText>
          </MarginTop>
        </View>
        <View style={SwiperBox}>
          <MarginTop>
            <FontAwesomeIcon
              color="#aaa"
              size={75}
              icon={faUserTie}
              style={BeeziclerCSS}
            />
          </MarginTop>
          <TextBox>
            <MiddleText style={MarginTopText}>
              {' '}
              안녕하세요
              {' '}
              {username}
              {' '}
              님
            </MiddleText>
            <LowText>
              중고 직거래 전문 비직러
              {' '}
              {beezicler}
              {' '}
              입니다
              {'\n'}
              직거래 장소와시간 그리고 판매 물건 픽업지를 확인
              {'\n'}
              {'\n'}
              현장에서 CheckList를 토대로 거래가 진행될 예정입니다
            </LowText>
          </TextBox>
        </View>
      </Swiper>
    </Box>
  );
}

export default DDTSlide;
