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
  font-size: 30;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  color: white;
  font-family: 'Jua-Regular';
`;

const CardListUp = (): JSX.Element => (
  <CheckListWrapper>
    <TitleForm>
      <Title>Beezic Issues</Title>
      <CarrotImage source={carrotLogo} />
    </TitleForm>
    <View style={{ height: 400, paddingBottom: 10 }}>
      <CardView />
    </View>
  </CheckListWrapper>
);

export default CardListUp;
