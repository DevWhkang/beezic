import React from 'react';
import styled from '@emotion/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Linking, View } from 'react-native';
import {
  UserStore, DetailInfoStore, ChatBotStore, AssignmentStore, CheckListStore,
} from '../../viewModel';
import DrawerListMenu from '../navigation/DrawerListMenu';
import bee from '../../assets/bee.png';
import carrot from '../../assets/Beezic_Logo_carrot.png';

type MainMenuPropTypes={
  navigation: (StackNavigationProp)
};

const Container = styled.View`
  height: 100%;
  width: 100%;
  border-radius: 0 30px 30px 0;
`;

const DrawerHeader = styled.View`
  height: 32%;
  width: 100%;
  border-radius: 0 30px 0 0;
  margin-bottom: 10px;
  border-bottom-color: #ff8a3d;
  border-bottom-style: solid;
  border-bottom-width: 0.8px;
`;
const DrawerBody = styled.View`
  height: 70%;
  width: 100%;
  border-radius: 0 0 30px 0;
`;
const DrawerListMenuContainer = styled.ScrollView``;

const HeaderProfileWrapper = styled.View`
  border-radius: 0 30px 0 0;
  flex-direction: row;
  padding: 15px 15px 10px 15px;
  align-items: center;  
  overflow: hidden;
  flex-shrink:1;
  width: 100%;
  height:50%;
`;
const HeaderUserNameText = styled.Text`
  font-size: 30px;
  font-family: 'Jua-Regular';
  margin-left: 20px;
`;

const HeaderBtnMenuWrapper = styled.View`
  flex-direction: row;
  padding: 20px 15px 15px 15px;
  background-color: ;
`;

const DrawerRoundBtn = styled.TouchableOpacity`
  border: 2px ${(props) => (props.add ? 'dotted' : 'solid')} #ff8a3d;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 5px;
`;
const RoundBtnTitle = styled.Text`
  font-family: 'BMHANNAPro';
  text-align: center;
`;

const RoundImg = styled.Image`
  height: 55px;
  width: 55px;
  resizeMode: contain,
  border-radius: 100px;
`;

function MainMenu({ navigation }:MainMenuPropTypes): JSX.Element {
  const { user } = UserStore;

  const navigateToMain = () => {
    navigation.navigate('MainStackNavigator', { screen: 'Main' });
  };
  const navigateToMyInfo = async () => {
    await DetailInfoStore.getUserTransactionList(user.uid);
    navigation.navigate('MyInfoStackNavigator', { screen: 'MyInfo' });
  };
  const navigateToEditMyInfo = () => {
    navigation.navigate('MyInfoStackNavigator', { screen: 'EditMyInfo' });
  };
  const navigateToDoBeezic = () => {
    ChatBotStore.initChatbotState();
    AssignmentStore.initAssignmentState();
    CheckListStore.initCheckListState();
    navigation.navigate('MainStackNavigator', { screen: 'TransactionInfo' });
  };
  const navigateToDanggeun = async () => {
    await Linking.openURL('towneers://open')
      .catch((e) => {
        if (e.toString().indexOf('No Activity found to handle Intent')) {
          Linking.openURL('market://details?id=com.towneers.www');
        }
      });
  };
  const navigateToBunjang = async () => {
    await Linking.openURL('quicket://open')
      .catch((e) => {
        if (e.toString().indexOf('No Activity found to handle Intent')) {
          Linking.openURL('market://details?id=kr.co.quicket');
        }
      });
  };
  const navigateToJoonggonara = async () => {
    await Linking.openURL('secondhandstore://open')
      .catch((e) => {
        if (e.toString().indexOf('No Activity found to handle Intent')) {
          Linking.openURL('market://details?id=com.elz.secondhandstore');
        }
      });
  };
  const logout = () => {
    UserStore.out();
  };
  return (
    <>
      <Container>
        <DrawerHeader>
          <HeaderProfileWrapper>
            <DrawerRoundBtn onPress={navigateToEditMyInfo}>
              {/* TODO user.이미지 로 교체 */}
              <RoundImg source={bee} />
            </DrawerRoundBtn>
            <HeaderUserNameText>
              {user.displayName}
            </HeaderUserNameText>
          </HeaderProfileWrapper>
          <HeaderBtnMenuWrapper>
            <View>
              <DrawerRoundBtn onPress={navigateToDoBeezic}>
                <RoundImg source={carrot} />
              </DrawerRoundBtn>
              <RoundBtnTitle>비직하기</RoundBtnTitle>
            </View>
            <View>
              <DrawerRoundBtn add>
                <FontAwesomeIcon color="#ff8a3d" size={30} icon={faPlus} />
              </DrawerRoundBtn>
              <RoundBtnTitle>추가하기</RoundBtnTitle>
            </View>
            <View>
              <DrawerRoundBtn add>
                <FontAwesomeIcon color="#ff8a3d" size={30} icon={faPlus} />
              </DrawerRoundBtn>
              <RoundBtnTitle>추가하기</RoundBtnTitle>
            </View>
            <View>
              <DrawerRoundBtn add>
                <FontAwesomeIcon color="#ff8a3d" size={30} icon={faPlus} />
              </DrawerRoundBtn>
              <RoundBtnTitle>추가하기</RoundBtnTitle>
            </View>
          </HeaderBtnMenuWrapper>
        </DrawerHeader>

        <DrawerBody>
          <DrawerListMenuContainer>
            <DrawerListMenu emoji="home" title="홈" onPress={navigateToMain} />
            <DrawerListMenu emoji="myBeezic" title="내 비직" onPress={navigateToMyInfo} />
            <DrawerListMenu emoji="myInfo" title="내 정보" onPress={navigateToEditMyInfo} isLast />

            <DrawerListMenu emoji="go" title="당근마켓으로 가기" onPress={navigateToDanggeun} />
            <DrawerListMenu emoji="go" title="번개장터로 가기" onPress={navigateToBunjang} />
            <DrawerListMenu emoji="go" title="중고나라로 가기" onPress={navigateToJoonggonara} isLast />

            <DrawerListMenu emoji="notice" title="공지사항" />
            <DrawerListMenu emoji="Q&A" title="자주묻는질문" />
            <DrawerListMenu emoji="contact" title="문의하기" isLast />
            <DrawerListMenu emoji="logout" title="로그아웃하기" onPress={logout} />
          </DrawerListMenuContainer>
        </DrawerBody>
      </Container>
    </>
  );
}

export default MainMenu;
