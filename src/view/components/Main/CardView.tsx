import React from 'react';
import { Text } from 'react-native';
import styled, { css } from '@emotion/native';
import Carrot from '../../../assets/Beezic_Logo_carrot.png';

const CardContainer = styled.View`
  border-radius: 4px;
  border-width: 1px;
  border-color: #c8c8c8;
  margin: 20px;
`;

const CardTitle = css`
  width: 100%;
  font-size: 22px;
  /* font-weight: bold; */
  padding: 3px; 
  font-family: 'Jua-Regular';
`;

const CardContent = css`
  width: 100%;
  font-size: 13px;
  padding:3px;
`;

const CardView = ():JSX.Element => (
  <>
    <CardContainer>
      <Text style={CardTitle}> 주식회사 강원형 설립</Text>
      <Text style={CardContent}> Beezic 어플리케이션의 개발사 설립되다...</Text>
    </CardContainer>
    <CardContainer>
      <Text style={CardTitle}> Beezic app 드디어 배포 </Text>
      <Text style={CardContent}> Beezic 드디어 세상에 모습을 드러내다...</Text>
    </CardContainer>
    <CardContainer>
      <Text style={CardTitle}> 코로나19 후유증 의외로 오래 간다 </Text>
      <Text style={CardContent}> 신종 코로나 바이러스 감염증이 유행한 초기 몇 주간...</Text>
    </CardContainer>
    <CardContainer>
      <Text style={CardTitle}> Beezic 유명 마켓 어플과 협약 한다 </Text>
      <Text style={CardContent}> 당근 장터 및 번개 마켓 등 국내 유명 회사와 협약...</Text>
    </CardContainer>
  </>
);

export default CardView;
