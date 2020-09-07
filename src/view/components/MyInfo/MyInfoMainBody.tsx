import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import UserSpecSection from './UserSpecSection';

const UserInfoWrapper = styled.View`
  padding: 10px 5px;
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
const MyTransactionSectionTitle = styled.Text`
  margin: 0 10px;
  font-size: 30px;
  font-weight: bold;
  border-bottom-color: #ff8a3d;
  border-bottom-width:2px;
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

const SeeAllTransaction = styled.TouchableOpacity`
  align-self: flex-end;
  padding-right: 10px;
  margin:0 0 10px 0;
`;

type MyInfoMainBodyPropTypes = {
  userData: { userName: string, userEmail: string, transactions:[]}
};

const MyInfoMainBody = ({
  userData: {
    userName,
    userEmail,
    transactions,
  },
}: MyInfoMainBodyPropTypes): JSX.Element => (
  <>
    <UserInfoWrapper>
      <UserSpecSection userInfo={{ title: '👤 Username', info: userName }} />
      <UserSpecSection userInfo={{ title: '📬 Email', info: userEmail }} />
      <EditMyInfoBtn>
        <Text style={{ fontSize: 19, color: 'black' }}>내 정보 수정하기</Text>
      </EditMyInfoBtn>
    </UserInfoWrapper>

    <MyTransactionSectionTitle>
      나의 직거래
    </MyTransactionSectionTitle>
    <MyTransactionSectionWrapper>
      <MyTransactionList
        nestedScrollEnabled
      >
        {transactions.map(({ id, title }):[JSX.Element] => (
          <MyTransactionBtn
            key={id}
          >
            <MyTransactionTitle>
              {title}
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
        <Text style={{ fontSize: 18, color: '#ff8a3d' }}>See All</Text>
      </SeeAllTransaction>
    </MyTransactionSectionWrapper>
  </>
);

export default MyInfoMainBody;
