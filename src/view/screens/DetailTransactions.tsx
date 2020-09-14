import React from 'react';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Text } from 'react-native';
import DDTSlide from '../components/DDT/DDTSlide';
import HamburgerMenu from '../components/Main/HamburgerMenu';

/*
 * TODO: Props로 username, location, 거래시간 등 받아서 표기할게 많음 Component DDTSlide.tsx 파일도 포함
 */
type DDTPageProps = {
  username: string
};

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
  margin-left: 15px;
  align-self: center;
`;

const NameTextCSS = css`
  font-size: 25px;
`;
const MarginTop = styled.View`
  margin-top: 30px;
`;

function DDTPage({ username }: DDTPageProps): JSX.Element {
  return (
    <>
      <HamburgerMenu />
      <HeaderBottomWrapper>
        <ProfileTitle>
          {username}
          <Text style={NameTextCSS}>
            님의 직거래 신청 정보
            {'  '}
            <FontAwesomeIcon
              color="#fc8a3d"
              size={50}
              icon={faUserCircle}
            />
          </Text>
        </ProfileTitle>
      </HeaderBottomWrapper>
      <MarginTop>
        <DDTSlide beezicler="강원형" />
      </MarginTop>
    </>
  );
}

export default DDTPage;
