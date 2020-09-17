import React, { useEffect } from 'react';
import styled, { css } from '@emotion/native';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import UserSpecSection from './UserSpecSection';
import { UserStore, DetailInfoStore } from '../../../viewModel';

const UserInfoWrapper = styled.View`
  padding: 10px 5px;
`;

const SectionTitle = css`
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
`;

const EditMyInfoBtn = styled.TouchableOpacity`
  align-self: center;
  border-bottom-color: #ff8a3d;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin: 5px;
`;

const MyTransactionSectionWrapper = styled.View`
  flex:1;
  align-items: center;
  padding: 5px;
  height: 260px;
`;
const MyTransactionList = styled.ScrollView`
`;
const MyTransaction = styled.View`
  margin: 0 10px;
  border-bottom-color: #ff8a3d;
  border-bottom-width:2px;
  flex-direction: row;
  justify-content: space-between;
`;
const MyTransactionBtn = styled.TouchableOpacity`
  background-color: #ff8a3d;
  width: 300px;
  height: 50px;
  margin: 10px;
`;
const MyTransactionTitle = styled.Text`
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  text-align: center;
`;

const UserIconWrapper = styled.TouchableOpacity`
`;

const SeeAllTransaction = styled.TouchableOpacity`
  align-self: flex-end;
  padding-right: 10px;
  margin:0 0 10px 0;
`;

const MyInfoMainBody = (): JSX.Element => {
  const navigation = useNavigation();
  const { user } = UserStore;
  return useObserver(() => (
    <>
      <UserInfoWrapper>
        <UserSpecSection userInfo={{ title: '👤 Username', info: UserStore.user.displayName }} />
        <UserSpecSection userInfo={{ title: '📬 Email', info: UserStore.user.email }} />
        <EditMyInfoBtn onPress={() => navigation.navigate('EditMyInfo')}>
          <Text style={{ fontSize: 19, color: 'black' }}>내 정보 수정하기</Text>
        </EditMyInfoBtn>
      </UserInfoWrapper>

      <MyTransaction>
        <Text style={SectionTitle}>나의 직거래</Text>
        <UserIconWrapper
          activeOpacity={0.6}
          onPress={() => DetailInfoStore.getUserTransactionList(user.uid)}
        >
          <FontAwesomeIcon
            color="#fc8a3d"
            size={25}
            icon={faRedoAlt}
          />
        </UserIconWrapper>
      </MyTransaction>
      <MyTransactionSectionWrapper>
        <MyTransactionList
          nestedScrollEnabled
        >
          {DetailInfoStore.userTransactionList.map(({ alias, id }) => (
            <MyTransactionBtn
              key={id}
              onPress={() => navigation.navigate('DetailInfo', {
                alias, id,
              })}
            >
              <MyTransactionTitle>
                {alias}
                {' '}
                <FontAwesomeIcon
                  color="white"
                  icon={faArrowRight}
                />
              </MyTransactionTitle>

            </MyTransactionBtn>
          ))}
        </MyTransactionList>
        <SeeAllTransaction>
          {/* 이 부분 없으면 스크롤뷰 깔끔하게 안나옴 그래서 따로 공백 표기해둠 */}
          <Text style={{ fontSize: 18, color: '#ff8a3d' }}>{' '}</Text>
        </SeeAllTransaction>
      </MyTransactionSectionWrapper>
    </>
  ));
};

export default MyInfoMainBody;
