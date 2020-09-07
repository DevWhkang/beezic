import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';
import HeaderTopBack from './HeaderTopBack';
import HeaderTopMenu from './HeaderTopMenu';

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
`;

const UserIconWrapper = styled.TouchableOpacity`
  align-self: center;
  margin-left: auto;
`;

type MyInfoPropTypes = {
  isLastPage: boolean,
  userData: {userName: string},
};

const MyInfoHeader = ({
  isLastPage,
  userData: { userName },
}: MyInfoPropTypes): JSX.Element => (
  <HeaderWrapper>
    {isLastPage
      ? <HeaderTopBack />
      : <HeaderTopMenu />}
    <HeaderBottomWrapper>
      <ProfileTitle>Profile</ProfileTitle>
      <UserName>
        {`| ${userName}님`}
      </UserName>
      <UserIconWrapper>
        <FontAwesomeIcon
          color="#fc8a3d"
          size={50}
          icon={faUserCircle}
        />
      </UserIconWrapper>
    </HeaderBottomWrapper>
  </HeaderWrapper>
);
export default MyInfoHeader;
