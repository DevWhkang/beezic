import React from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
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
}: MyInfoMainBodyPropTypes): JSX.Element => {
  const navigation = useNavigation();
  return (
    <>
      <UserInfoWrapper>
        <UserSpecSection userInfo={{ title: '👤 Username', info: userName }} />
        <UserSpecSection userInfo={{ title: '📬 Email', info: userEmail }} />
        <EditMyInfoBtn onPress={() => navigation.navigate('EditMyInfo')}>
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
              onPress={() => navigation.navigate('DetailInfo')}
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
          {/* 이 부분 없으면 스크롤뷰 깔끔하게 안나옴 그래서 따로 공백 표기해둠 */}
          <Text style={{ fontSize: 18, color: '#ff8a3d' }}>{' '}</Text>
        </SeeAllTransaction>
      </MyTransactionSectionWrapper>
    </>
  );
};

export default MyInfoMainBody;
