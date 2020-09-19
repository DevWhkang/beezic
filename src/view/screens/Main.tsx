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
// import logo from '../../assets/Beezic_Logo.png';
import CardListUp from '../components/Main/CardListUp';
import Fixbutton from '../components/Main/FixButton';
import BottomBox from '../components/Main/MainBotBox';
import Button from '../components/Button';
import logo from '../../assets/Beezic_Logo.png';
import { ChatbotModel, AssignmentModel } from '../../model';

const HeaderWrapper = styled.View`
position: relative;
padding: 10px;
bottom: -10;
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
margin-bottom: 5px;
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
  background-color: green;
  margin-top: 50px;
  margin-bottom: 30px;
  background-color: rgba( 10, 128, 1, 0.7 );
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
    navigation.navigate('TransactionInfo');
    ChatBotStore.initChatbotState();
    AssignmentStore.initAssignmentState();
    CheckListStore.initCheckListState();
  };
  const { height } = Dimensions.get('window');
  return useObserver(() => (
    <>
      <HeaderWrapper>
        <Hamburger />
        {/* <Logo source={logo} /> */}
      </HeaderWrapper>
      <MainScrollView
        nestedScrollEnabled
      >
        <Slide Username={UserStore.user.displayName} />
        <CardListUp propHeight={height} />
      </MainScrollView>
      <Fixbutton
        onPress={startBeezic}
        background={ButtonStyle}
      />
    </>
  ));
}

export default Main;
