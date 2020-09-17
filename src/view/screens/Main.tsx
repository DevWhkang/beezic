import React from 'react';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import { Dimensions } from 'react-native';
import {
  ChatBotStore, CheckListStore, AssignmentStore, UserStore,
} from '../../viewModel';
import Hamburger from '../components/Main/HamburgerMenu';
import Slide from '../components/Main/Slide';
import Button from '../components/Button';
import logo from '../../assets/Beezic_Logo.png';
import News from '../components/Main/News';

const HeaderWrapper = styled.View`
position: relative;
padding: 10px;
bottom: -10;
width: 100%;
height: 60px;
display: flex;
flex-direction: row;
margin-bottom: 60px;
`;
const MainScrollView = styled.ScrollView`
`;

const ScrollSectionWrapper = styled.View`
  flex:1;
  align-items: center;
  padding: 5px;
  height: 260px;
`;
const ButtonStyle = css`
  background-color: #D2691E;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Logo = styled.Image`
  width: 120px;
  height: 100px;
  align-self: center;
  margin-left: 80px;
  margin-top: 20px;
`;

function Main(): JSX.Element {
  const navigation = useNavigation();
  const startBeezic = () => {
    ChatBotStore.initChatbotState();
    AssignmentStore.initAssignmentState();
    CheckListStore.initCheckListState();

    navigation.navigate('TransactionInfo');
  };
  const { height } = Dimensions.get('window');
  return useObserver(() => (
    <>
      <MainScrollView
        nestedScrollEnabled
      >
        <HeaderWrapper>
          <Hamburger />
          <Logo source={logo} />
        </HeaderWrapper>
        <Slide Username={UserStore.user.displayName} />
        <Button
          title="비직하기"
          onPress={startBeezic}
          background={ButtonStyle}
        />
        {/* <News propHeight={height} /> */}
      </MainScrollView>
    </>
  ));
}

export default Main;
