import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderTopBack from './HeaderTopBack';
import HeaderTopMenu from './HeaderTopMenu';
import { UserStore } from '../../../viewModel';
import UserSpecSection from './UserSpecSection';

const HeaderWrapper = styled.View`
  margin-bottom: 30px;
  padding: 10px 10px 10px 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #dfdFdF;
  display: flex;
`;

const HeaderBottomWrapper = styled.View`
  position: relative;
  padding-left: 30px;
  /* bottom: -10; */
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
`;

const ProfileBox = styled.View`
  position: relative;
  flex-direction: row;
  align-items: flex-start;
`;

const UserName = styled.Text`
  font-size: 30px;
  /* flex-shrink: 1; */
`;

const UserNameCss = css`
  font-size: 30px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: 'Jua-Regular';
`;

const EmailCss = css`
  font-size: 20px;
  font-family: 'Jua-Regular';
  color: #777;
`;

const UserEmailCss = css`
  font-size: 20px;
  margin-bottom: 18px;
  font-family: 'Jua-Regular';
`;

const UserIconWrapper = styled.TouchableOpacity`
  margin: 20px 10px 20px 40px;
  border-radius: 40px;
`;

const EditMyInfoBtn = styled.TouchableOpacity`
  align-self: flex-start;
  border-bottom-color: #ff8a3d;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin: 5px;
  z-index: 999;
`;

type MyInfoPropTypes = {
  isLastPage: boolean,
};

const MyInfoNewHeader = ({
  isLastPage,
}: MyInfoPropTypes): JSX.Element => {
  const navigation = useNavigation();
  return useObserver(() => (
    <>
      <HeaderWrapper>
        {isLastPage
          ? <HeaderTopBack />
          : <HeaderTopMenu />}
      </HeaderWrapper>
      <ProfileBox>
        <UserIconWrapper>
          <FontAwesomeIcon
            color="#8c8c8c"
            style={{
              opacity: 0.6,
            }}
            size={80}
            icon={faUserCircle}
          />
        </UserIconWrapper>
        <HeaderBottomWrapper>
          <Text style={UserNameCss}>
            {`${UserStore.user.displayName} 님`}
          </Text>
          <Text style={EmailCss}>Email</Text>
          <Text style={UserEmailCss}>{`${UserStore.user.email}`}</Text>
          <EditMyInfoBtn onPress={() => navigation.navigate('EditMyInfo')}>
            <Text style={{ fontSize: 19, color: 'black' }}>내 정보 수정하기</Text>
          </EditMyInfoBtn>
        </HeaderBottomWrapper>
      </ProfileBox>
    </>
  ));
};

export default MyInfoNewHeader;
