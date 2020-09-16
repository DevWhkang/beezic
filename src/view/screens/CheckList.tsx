import React from 'react';
import {
  View, Text, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard, Alert, BackHandler,
} from 'react-native';
import styled, { css } from '@emotion/native';

import { useObserver } from 'mobx-react';
import { CommonActions, useFocusEffect, useNavigation } from '@react-navigation/native';
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
  margin-left: 80px;
  background-color: #D2691E;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
`;
const completeTextStyle = css`
  font-family: 'Jua-Regular';
  font-size: 20px;
`;

const CheckList = (): JSX.Element => {
  const navigation = useNavigation();

  const handleCompleteButton = () => {
    if (CheckListStore.checkItems.length === 0) {
      Alert.alert('응');
      // TODO 나중에 할래요, 나중에 할 수 있는 곳 설명 등 나중에 할래요 버튼 누르면 디테일 페이지로
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        }),
        navigation.navigate('MyInfoStackNavigator', { screen: 'DetailInfo' }),
      );
    }
  };
  useFocusEffect(() => {
    const onBackPress = async () => {
      const result = new Promise(() => (
        Alert.alert('경고', '직거래가 예약되었습니다.\n취소는 마이페이지나 상세보기 페이지에서 가능합니다.', [
          {
            text: '상세페이지로 가기',
            onPress: () => {
              navigation.navigate('MyInfoStackNavigator', { screen: 'DetailInfo' });
              return true;
            },
          },
        ])))
        .then((e) => e);
      return result;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  });

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
              <Text style={completeTextStyle} onPress={handleCompleteButton}>다했어요</Text>
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
