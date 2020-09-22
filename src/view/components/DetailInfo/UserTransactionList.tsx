import React, { useEffect } from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import {
  Text, View, Image, TouchableOpacity, FlatList,
} from 'react-native';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StackActions, useNavigation } from '@react-navigation/native';
import Carrot from '../../../assets/Beezic_Logo_carrot.png';
import Bee from '../../../assets/bee.png';
import Logo from '../../../assets/Beezic_Logo.png';
import DetailInfoStore from '../../../viewModel/DetailInfoStore';
import {
  AssignmentStore, ChatBotStore, CheckListStore, UserStore,
} from '../../../viewModel';

const AddTransactionStyle = css`
  height: 100;
  width: 100;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 14;
`;

const plusIconStyle = css`
  color: #D2691E;
  align-self: center;
`;

const TansactionsStyle = css`
  width: 70;
  height: 70;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
`;

const AddTranscationIcon = styled.View`
  width: 60;
  height: 60;
  background-color: #FFEFD5;
  border-radius: 20px;
  margin-bottom: 10;
  justify-content: center;
`;

const TransactionListTitle = styled.Text`
  color: #fff;
  font-size: 15;
  opacity: 0.7;
  font-family: 'Jua-Regular';
`;

const UserTransaction = styled.View`
  flex-direction: row;
  background-color: #fff;
`;

const AddText = styled.Text`
  color: #000;
  font-size: 15;
  font-family: 'Jua-Regular';
`;

const userTransactionList = (): JSX.Element => {
  const { user } = UserStore;
  useEffect(() => {
    DetailInfoStore.getUserTransactionList(user.uid);
  }, []);
  const navigation = useNavigation();
  const userTransactions = DetailInfoStore.renderUserTransactionList;

  const navigationChatbot = () => {
    ChatBotStore.initChatbotState();
    AssignmentStore.initAssignmentState();
    CheckListStore.initCheckListState();
    navigation.dispatch(
      StackActions.popToTop(),
      navigation.navigate('MainStackNavigator', { screen: 'TransactionInfo' }),
    );
  };

  return useObserver(() => (
    <View>
      <TransactionListTitle>나의 직거래 리스트</TransactionListTitle>
      <UserTransaction>
        <TouchableOpacity onPress={navigationChatbot} style={AddTransactionStyle}>
          <AddTranscationIcon>
            <FontAwesomeIcon icon={faPlus} style={plusIconStyle} size={25} />
          </AddTranscationIcon>
          <AddText>비직 추가</AddText>
        </TouchableOpacity>
        <FlatList
          inverted
          horizontal
          data={userTransactions}
          renderItem={({ item: { alias, itemImages, id } }) => (
            <View>
              <Image style={TansactionsStyle} source={{ uri: `data:image/png;base64,${itemImages[0].fileUri}` }} />
              <Text style={{ color: 'black', textAlign: 'center' }}>{alias}</Text>
            </View>
          )}
        />
      </UserTransaction>
    </View>
  ));
};

export default userTransactionList;
