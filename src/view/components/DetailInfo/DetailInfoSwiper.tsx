import React from 'react';
import { View, Text } from 'react-native';
import styled, { css } from '@emotion/native';
import Swiper from 'react-native-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { useObserver } from 'mobx-react';
import Maps from './Maps';

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

const mapViewWrapperStyle = css`
  width: 100%;
  height: 100%;
`;

const mapViewStyle = css`
  width: 320px;
  height: 220px;
  margin-left: 25px;
  margin-top: 13px;
  border: solid 1px #c8c8c8;
`;

const mapViewTitleStyle = css`
  font-family: 'BMHANNA_11yrs';
  font-size: 20;
  margin-top: 20;
  color: #8c8c8c;
  align-self: center;
`;

function DetailInfoSwiper({ id }): JSX.Element {
  return (
    <SwiperWrapper>
      <Swiper
        showsButtons
        // loop
        dot={(<View style={dotStyle} />)}
        activeDot={(<View style={dotActiveStyle} />)}
        prevButton={(
          <FontAwesomeIcon size={25} icon={faAngleDoubleLeft} style={allowButtonStyle} />
        )}
        nextButton={(
          <FontAwesomeIcon size={25} icon={faAngleDoubleRight} style={allowButtonStyle} />
        )}
      >
        <View style={mapViewWrapperStyle}>
          <Text style={mapViewTitleStyle}>여기서 직거래 할게요.</Text>
          <View style={mapViewStyle}>
            <Maps type="직거래" id={id} />
          </View>
        </View>
        <View style={mapViewWrapperStyle}>
          <Text style={mapViewTitleStyle}>여기로 픽업하러 갈게요.</Text>
          <View style={mapViewStyle}>
            <Maps type="픽업지" id={id} />
          </View>
        </View>
      </Swiper>
    </SwiperWrapper>
  );
}

export default DetailInfoSwiper;
