import React from 'react';
import { Text } from 'react-native';
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

// 텍스트 컴포넌트
const ProfileTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const UserName = styled.Text`
  font-size: 30px;
`;

// FIXME naming function으로 수정하고 type 및 defaultProps 추가 요망
export default (props: any): JSX.Element => {
  const { isLastPage, userData: { userName } } = props;

  return (
    <HeaderWrapper>
      {
        isLastPage
          ? <HeaderTopBack />
          : <HeaderTopMenu />
      }
      <HeaderBottomWrapper>
        <ProfileTitle>Profile</ProfileTitle>
        <UserName>
          {`| ${userName}님`}
        </UserName>
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 'auto',
          }}
        >
          <FontAwesomeIcon
            color="#fc8a3d"
            size={50}
            icon={faUserCircle}
          />
        </Text>
      </HeaderBottomWrapper>
    </HeaderWrapper>
  );
};
