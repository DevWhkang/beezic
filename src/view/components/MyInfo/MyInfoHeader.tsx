import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { Text } from 'react-native';
import HeaderTopBack from './HeaderTopBack';
import HeaderTopMenu from './HeaderTopMenu';
import { UserStore } from '../../../viewModel';

const HeaderWrapper = styled.View`
  height: 150px;
  padding: 10px 10px 0px 10px;
  display: flex;
`;

const HeaderBottomWrapper = styled.View`
  position: relative;
  padding: 10px;
  bottom: -10;
  width: 100%;
  height: 60px;
  border-bottom-color: #ff8a3d;
  border-bottom-style: solid;
  border-bottom-width:2px;
  display: flex;
  flex-direction: row;
`;

const ProfileTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const UserName = styled.Text`
  font-size: 30px;
  flex-shrink: 1;
`;

const UserNameCss = css`
  font-size: 30px;
`;

const UserIconWrapper = styled.TouchableOpacity`
  align-self: center;
  margin-left: auto;
`;

type MyInfoPropTypes = {
  isLastPage: boolean,
};

const MyInfoHeader = ({
  isLastPage,
}: MyInfoPropTypes): JSX.Element => useObserver(() => (
  <HeaderWrapper>
    {isLastPage
      ? <HeaderTopBack />
      : <HeaderTopMenu />}
    <HeaderBottomWrapper>
      <ProfileTitle>Profile</ProfileTitle>
      <UserName>
        {` | ${UserStore.user.displayName}`}
      </UserName>
      <Text style={UserNameCss}>님 </Text>
      <UserIconWrapper>
        <FontAwesomeIcon
          color="#fc8a3d"
          size={50}
          icon={faUserCircle}
        />
      </UserIconWrapper>
    </HeaderBottomWrapper>
  </HeaderWrapper>
));

export default MyInfoHeader;
