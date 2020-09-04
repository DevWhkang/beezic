import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import styled from '@emotion/native';
import { useObserver } from 'mobx-react';
import CheckedInsert from '../components/CheckList/checkedInsert.tsx';
import CheckedList from '../components/CheckList/checkedlist.tsx';
import carroLogo from '../../assets/Beezic_Logo_carrot.png';
import checkListStore from '../../viewModel/store.ts';

const TitleText = styled.Text`
  font-size: 50;
  font-family: 'Jua-Regular';
  text-align: center;
  margin-top: 30;
  margin-bottom: 30;
  color: #D2691E;
`;

const CheckAreaView = styled.View`
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  margin-left: 10;
  margin-right: 10;
`;

const EmptyText = styled.Text`
  font-size: 150px;
  margin-left: 100px;
  margin-top: 100px;
  font-family: 'Jua-Regular';
  color: #c8c8c8;
`;

const UserCheckText = styled.Text`
  font-size: 25;
  font-family: 'Jua-Regular';
  margin-left: 10;
  margin-top: 20;
  margin-bottom: 20;
`;

const CheckList = () => useObserver(() => (
  <SafeAreaView>
    <TitleText>
      Check List
      <Image source={carroLogo} />
    </TitleText>
    <CheckAreaView>
      <CheckedInsert />
      <UserCheckText>나의 직거래 체크 목록 :</UserCheckText>
      {checkListStore.checkItems.length !== 0
        ? <CheckedList /> : <EmptyText>텅...</EmptyText>}
    </CheckAreaView>
  </SafeAreaView>
));

export default CheckList;
