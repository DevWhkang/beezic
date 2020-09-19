import React from 'react';
import {
  View, Text, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard, Alert, BackHandler,
} from 'react-native';
import styled, { css } from '@emotion/native';

import { useObserver } from 'mobx-react';
import {
  CommonActions, StackActions, useFocusEffect, useNavigation,
} from '@react-navigation/native';
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
  margin-left: 60px;
  background-color: #D2691E;
  border-radius: 30px;
  padding: 9px  ;
  width: 100px;
`;
const completeTextStyle = css`
  font-family: 'Jua-Regular';
  font-size: 20px;
  color: white;
  text-align: center;
  margin-top: 2px;
`;

const CheckList = (): JSX.Element => {
  const navigation = useNavigation();

  const handleCompleteButton = () => {
    if (CheckListStore.checkItems.length === 0) {
      Alert.alert('', '나중에 작성하실껀가요? \n상세페이지에서 수정과 취소를 할 수 있어요', [
        {
          text: '나중에 하기',
          onPress: () => (
            navigation.dispatch(
              StackActions.popToTop(),
            )),
        },
        { text: '지금 하기', style: 'cancel' },
      ]);
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
      const result = await new Promise(() => (
        Alert.alert('', '나중에 작성하실껀가요? \n상세페이지에서 수정과 취소를 할 수 있어요', [
          {
            text: '나중에 하기',
            onPress: () => {
              navigation.dispatch(
                StackActions.popToTop(),
              );
              return true;
            },
          },
          { text: '지금 하기', style: 'cancel' },
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
