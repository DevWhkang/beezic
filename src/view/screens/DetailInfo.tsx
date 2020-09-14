import React from 'react';

import {
  View,
  Dimensions,
  // TouchableOpacityBase,
} from 'react-native';
import { useObserver } from 'mobx-react';
import styled, { css } from '@emotion/native';
import carrotLogo from '../../assets/Beezic_Logo_carrot.png';
import TransactionDetailInfo from '../components/DetailInfo/TransactionDetailInfo';
import UserTransactionList from '../components/DetailInfo/UserTransactionList';
import TransactionCheckList from '../components/DetailInfo/TransactionCheckList';
import DetailInfoSwiper from '../components/DetailInfo/DetailInfoSwiper';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContentsForm = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserImageForm = styled.View`
  background-color: #dcdcdc;
  border-radius: 40px;
`;

const UserImage = styled.Image`
  width: 55;
  height: 55;
  /* background-color: #c8c8c8; */
  border-radius: 40px;
`;

const Greetings = styled.Text`
  font-size: 20;
  font-family: 'Jua-Regular';
  color: #D2691E;
  margin-top: 5px;
`;

const ProfileImageNotification = css`
  height: 12;
  width: 12;
  background-color: #32F1FF;
  border-radius: 6px;
  position: absolute;
  right: 6;
  border-width: 2px;
  border-color: #000;
  opacity: 1;
`;
// TODO: username 가져와서 임진성 부분에 넣기
const DetailInfo = (): JSX.Element => {
  const { width, height } = Dimensions.get('window');

  return useObserver(() => (
    <Container>
      <ContentsForm>
        <View>
          <Greetings>안녕하세요 임진성님,</Greetings>
          <Greetings>비직하기 상세 정보 입니다.</Greetings>
        </View>
        <UserImageForm>
          <UserImage source={carrotLogo} />
          {/* <View style={ProfileImageNotification} /> */}
        </UserImageForm>
      </ContentsForm>
      {/* <TransactionDetailInfo propWidth={width} /> */}
      <DetailInfoSwiper />
      <UserTransactionList />
      <TransactionCheckList propHeight={height} />
    </Container>
  ));
};

export default DetailInfo;
