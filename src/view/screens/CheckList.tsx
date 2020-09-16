import React from 'react';
import {
  View, Text, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';
import styled, { css } from '@emotion/native';

import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import CheckedInsert from '../components/CheckList/CheckedInsert';
import CheckedList from '../components/CheckList/CheckedList';
import carrotLogo from '../../assets/Beezic_Logo_carrot.png';
import CheckListStore from '../../viewModel/CheckListStore';

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

const completeAreaStyle = css`
  flex-direction: row;
`;

const completeButtonStyle = css`
  align-self: center;
  margin-left: 100px;
`;

const CheckList = (): JSX.Element => {
  const navigation = useNavigation();

  const handleCompleteButton = () => {
    if (CheckListStore.checkItems.length === 0) {
      Alert.alert('응');
      // TODO 나중에 할래요, 나중에 할 수 있는 곳 설명 등 나중에 할래요 버튼 누르면 디테일 페이지로
    } else {
      navigation.navigate('MyInfoStackNavigator', { screen: 'DetailInfo' });
    }
  };

  return useObserver(() => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <TitleText>
          Check List
          <Image source={carrotLogo} />
        </TitleText>
        <CheckAreaView>
          <CheckedInsert />
          <View style={completeAreaStyle}>
            <UserCheckText>나의 직거래 체크 목록 :</UserCheckText>
            <View style={completeButtonStyle}>
              <Text onPress={handleCompleteButton}>다했어요</Text>
            </View>
          </View>
          {CheckListStore.checkItems.length !== 0
            ? <CheckedList /> : <EmptyText>텅...</EmptyText>}
        </CheckAreaView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  ));
};

export default CheckList;
