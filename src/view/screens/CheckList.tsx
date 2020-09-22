import React from 'react';
import {
  View, Text, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard, BackHandler,
} from 'react-native';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { StackActions, useFocusEffect, useNavigation } from '@react-navigation/native';
import CheckedInsert from '../components/CheckList/CheckedInsert';
import CheckedList from '../components/CheckList/CheckedList';
import carrotLogo from '../../assets/Beezic_Logo_carrot.png';
import CheckListStore from '../../viewModel/CheckListStore';
import ContinueModal from '../components/ContinueModal';
import { DetailInfoStore, UserStore } from '../../viewModel';

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
  const handleCompleteButton = async () => {
    const { user } = UserStore;
    if (CheckListStore.checkItems.length === 0) {
      CheckListStore.toggleModal();
    } else {
      navigation.dispatch(
        StackActions.popToTop(),
        navigation.navigate('MyInfoStackNavigator', { screen: 'MyInfo' }),
      );
    }
  };
  useFocusEffect(() => {
    const onBackPress = () => {
      CheckListStore.toggleModal();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  });

  const onLaterHandler = () => {
    CheckListStore.toggleModal();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  const onContinueHandler = () => {
    CheckListStore.toggleModal();
  };

  return useObserver(() => (
    <>
      <ContinueModal
        content="나중에 작성하실껀가요?"
        description="상세페이지에서 수정할 수 있어요!"
        isVisible={CheckListStore.isModalShown}
        onLaterPress={onLaterHandler}
        onContinuePress={onContinueHandler}
      />
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
    </>
  ));
};

export default CheckList;
