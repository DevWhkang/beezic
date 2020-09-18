import React from 'react';
import styled from '@emotion/native';
import { View } from 'react-native';
import carrotLogo from '../../../assets/Beezic_Logo_carrot.png';
import CardView from './CardView';

const TitleForm = styled.View`
  flex-direction: row;
  background-color: #F5AF64;
`;

const CheckListWrapper = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const CarrotImage = styled.Image`
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 30px;
  color: white; 
  font-family: 'Jua-Regular';
`;
// title 두께 줄이기
const CardListUp = (): JSX.Element => (
  <CheckListWrapper>
    <TitleForm>
      <Title>Beezic Issues</Title>
      <CarrotImage source={carrotLogo} />
    </TitleForm>
    <View style={{ height: 480, paddingBottom: 10 }}>
      <CardView />
    </View>
  </CheckListWrapper>
);

export default CardListUp;
