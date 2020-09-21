import React from 'react';
import {
  Text, StyleSheet, Animated, Easing,
} from 'react-native';
import styled, { css } from '@emotion/native';
import Carrot from '../../../assets/Beezic_Logo_carrot.png';

const TouchCard = styled.TouchableOpacity`
`;

const CardContainer = styled.View`
  border-color: #000; 
  margin: 20px 20px 0px 20px;
  width: 350px;
  height: 100px;
  padding: 15px;
  elevation: 4;
`;

const CardTitle = css`
  width: 100%;
  font-size: 18px;
  padding: 5px; 
  border-bottom-width:2px;
  border-bottom-color: #2B3F6B;
  font-family: 'BMHANNA_11yrs';
`;

const CardContent = css`
  margin-top: 5px;
  width: 100%;
  font-size: 12px;
  padding:3px;
`;
/* TODO: 배열 Map 으로 Refactoring 예정 지금은 일단 하드코딩 */
const scaleValue = new Animated.Value(1);
const scaleValue1 = new Animated.Value(1);
const scaleValue2 = new Animated.Value(1);
const scaleValue3 = new Animated.Value(1);
const scale = scaleValue.interpolate({ inputRange: [1, 2], outputRange: [1, 2] });
const scale1 = scaleValue1.interpolate({ inputRange: [1, 2], outputRange: [1, 2] });
const scale2 = scaleValue2.interpolate({ inputRange: [1, 2], outputRange: [1, 2] });
const scale3 = scaleValue3.interpolate({ inputRange: [1, 2], outputRange: [1, 2] });

const pulse = (value) => () => {
  value.setValue(1);
  Animated.timing(value, {
    toValue: 1.1, duration: 300, easing: Easing.linear, useNativeDriver: true,
  }).start(() => {
    Animated.timing(value, {
      toValue: 1, duration: 300, easing: Easing.linear, useNativeDriver: true,
    }).start();
  });
};

const CardView = ():JSX.Element => (
  <>
    <TouchCard onPress={pulse(scaleValue)} activeOpacity={1}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <CardContainer>
          <Text style={CardTitle}>'주식회사 강원형' 설립</Text>
          <Text style={CardContent}> Beezic 어플리케이션의 개발사로 알려져...</Text>
        </CardContainer>
      </Animated.View>
    </TouchCard>
    <TouchCard onPress={pulse(scaleValue1)} activeOpacity={1}>
      <Animated.View style={{ transform: [{ scale: scale1 }] }}>
        <CardContainer>
          <Text style={CardTitle}>'Beezic' app 드디어 배포 </Text>
          <Text style={CardContent}> Beezic 드디어 세상에 모습을 드러내다...</Text>
        </CardContainer>
      </Animated.View>
    </TouchCard>
    <TouchCard onPress={pulse(scaleValue2)} activeOpacity={1}>
      <Animated.View style={{ transform: [{ scale: scale2 }] }}>
        <CardContainer>
          <Text style={CardTitle}>코로나19 '후유증' 의외로 오래 간다 </Text>
          <Text style={CardContent}> 신종 코로나 바이러스 감염증이 유행한 초기 몇 주간...</Text>
        </CardContainer>
      </Animated.View>
    </TouchCard>
    <TouchCard onPress={pulse(scaleValue3)} activeOpacity={1}>
      <Animated.View style={{ transform: [{ scale: scale3 }] }}>
        <CardContainer>
          <Text style={CardTitle}>'Beezic' 유명 마켓 어플과 '협약' </Text>
          <Text style={CardContent}> '당근 장터' 및 '번개 마켓' 등 국내 유명 회사와 협약...</Text>
        </CardContainer>
      </Animated.View>
    </TouchCard>
  </>
);

export default CardView;
