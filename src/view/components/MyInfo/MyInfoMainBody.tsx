import React from 'react';
import styled, { css } from '@emotion/native';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import { DetailInfoStore } from '../../../viewModel';

const SectionTitle = css`
  margin-top: 60px;
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
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
`;
const MyTransactionBtn = styled.TouchableOpacity`
  background-color: #ff8a3d;
  border-radius: 10px;
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

const ArrowStyle = styled.View`
  margin-left: auto;
  padding: 15px 20px;
`;

const ArrowStyleCss = css`
  flex-direction: row;
`;

const SeeAllTransaction = styled.TouchableOpacity`
  align-self: flex-end;
  padding-right: 10px;
  margin:0 0 10px 0;
`;

const MyInfoMainBody = (): JSX.Element => {
  const navigation = useNavigation();
  return useObserver(() => (
    <>
      <MyTransaction>
        <Text style={SectionTitle}>나의 직거래</Text>
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
              <View style={ArrowStyleCss}>
                <MyTransactionTitle>
                  {alias}
                </MyTransactionTitle>
                <ArrowStyle>
                  <FontAwesomeIcon
                    color="white"
                    icon={faArrowRight}
                  />
                </ArrowStyle>
              </View>
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
