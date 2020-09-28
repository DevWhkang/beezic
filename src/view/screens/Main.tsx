import React from 'react';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import { Dimensions, Image } from 'react-native';
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
import { AssignmentModel } from '../../model';

const HeaderWrapper = styled.View`
position: relative;
padding-left: 10px;
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

// const a = AssignmentModel.setStaffDoc([
//   {
//     assignmentTransaction: [],
//     staffProfile: {
//       email: 'kwh4921@gmail.com',
//       id: 1,
//       name: '강원형',
//       introduce: '안녕하세요 비직 직원 강원형입니다. 중고 직거래는 저에게 맡겨주세요',
//       image: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f3287bf5-784d-4b9f-968b-3bc64c5fcb5a/20200921_114610_474.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200922T030712Z&X-Amz-Expires=86400&X-Amz-Signature=0ecf5ec5a1474e30cf27cfac26f05a4d34590fdede1718bed9ee05d2b160baa1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2220200921_114610_474.jpg%22',
//       phone: '010 - 1234 - 5678',
//     },
//   }, {
//     assignmentTransaction: [],
//     staffProfile: {
//       email: 'yjs@gmail.com',
//       id: 2,
//       name: '임진성',
//       introduce: '안녕하세요 비직 직원 임진성입니다. 중고 직거래는 저에게 맡겨주세요',
//       image: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7af80a3-111d-42de-808a-79a58acb4586/20200921_114452.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200922T030708Z&X-Amz-Expires=86400&X-Amz-Signature=762ee79d1e608226a623e49c109212650de9e5fea53796ecf171a4a61f916125&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2220200921_114452.jpg%22',
//       phone: '010 - 1234 - 5678',
//     },
//   }, {
//     assignmentTransaction: [],
//     staffProfile: {
//       email: 'pjy@gmail.com',
//       id: 3,
//       name: '박진용',
//       introduce: '안녕하세요 비직 직원 박진용입니다. 중고 직거래는 저에게 맡겨주세요',
//       image: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6aae48e0-34f2-4343-9dfd-be38cecf7ed2/20200921_114828_128.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200922T030709Z&X-Amz-Expires=86400&X-Amz-Signature=b2132990f51c51024f6586d47bc2564271938c7f90069289e27d444dd1504257&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2220200921_114828_128.jpg%22',
//       phone: '010 - 1234 - 5678',
//     },
//   }, {
//     assignmentTransaction: [],
//     staffProfile: {
//       email: 'khg@gmail.com',
//       id: 4,
//       name: '김형균',
//       introduce: '안녕하세요 비직 직원 김형균입니다. 중고 직거래는 저에게 맡겨주세요',
//       image: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/639d625c-32a8-432e-bba4-7c2b3721848e/20200921_114456.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20200922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20200922T030715Z&X-Amz-Expires=86400&X-Amz-Signature=d79c2bef29995fb5a97e491c53ceeec60675db19c1a35769360bdb5e27c8c078&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2220200921_114456.jpg%22',
//       phone: '010 - 1234 - 5678',
//     },
//   },
// ]);
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
