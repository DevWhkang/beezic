import React from 'react';
import { View, Text } from 'react-native';
import styled, { css } from '@emotion/native';
import Swiper from 'react-native-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
/*
 * TODO: Props로 username, location, 거래시간 등 받아서 표기할게 많음 Component DDTSlide.tsx 파일도 포함
 */
type IProps = {
  username: string,
  beezicler: string,
};

const SwiperWrapper = styled.View`
  margin-top: 15px;
  width: auto;
  height: 325px;
  border-width: 1px;
  border-radius: 40px;
  border-color: #dcdcdc;
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

function DetailInfoSwiper({ username, beezicler }: IProps): JSX.Element {
  return (
    <SwiperWrapper>
      <Swiper
        showsButtons
        loop
        dot={(<View style={dotStyle} />)}
        activeDot={(<View style={dotActiveStyle} />)}
        prevButton={(<FontAwesomeIcon size={25} icon={faAngleDoubleLeft} style={allowButtonStyle} />)}
        nextButton={(<FontAwesomeIcon size={25} icon={faAngleDoubleRight} style={allowButtonStyle} />)}
      >
        <View><Text>zzzz</Text></View>
        <View><Text>zzzz</Text></View>
        <View><Text>zzzz</Text></View>
      </Swiper>
    </SwiperWrapper>
  );
}

export default DetailInfoSwiper;
