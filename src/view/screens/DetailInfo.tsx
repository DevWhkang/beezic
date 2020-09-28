import React, { useEffect } from 'react';
import { View, Dimensions, BackHandler } from 'react-native';
import { useObserver } from 'mobx-react';
import styled from '@emotion/native';
import {
  CommonActions, useFocusEffect, useNavigation, useRoute,
} from '@react-navigation/native';
import carrotLogo from '../../assets/Beezic_Logo_carrot.png';
import UserTransactionList from '../components/DetailInfo/UserTransactionList';
import TransactionCheckList from '../components/DetailInfo/TransactionCheckList';
import DetailInfoSwiper from '../components/DetailInfo/DetailInfoSwiper';
import { UserStore, DetailInfoStore } from '../../viewModel';

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

const DetailInfo = (): JSX.Element => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const route = useRoute();
  const { alias, id } = route.params;

  useEffect(() => {
    DetailInfoStore.filterTargetTransaction(id);
  });
  useFocusEffect(() => {
    const onBackPress = () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'MyInfo' }],
        }),
      );
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  });

  return useObserver(() => (
    <Container>
      <ContentsForm>
        <View>
          <Greetings>
            안녕하세요
            {' '}
            {UserStore.user.displayName}
            님,
          </Greetings>
          <Greetings>{`"${alias}"의 상세 정보 입니다.`}</Greetings>
        </View>
        <UserImageForm>
          <UserImage source={carrotLogo} />
        </UserImageForm>
      </ContentsForm>
      <DetailInfoSwiper id={id} />
      {
        DetailInfoStore.targetTransaction.itemImages && <UserTransactionList />
      }
      <TransactionCheckList id={id} propHeight={height} />
    </Container>
  ));
};

export default DetailInfo;
