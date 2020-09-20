import React from 'react';
import styled, { css } from '@emotion/native';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import UserSpecSection from './UserSpecSection';

const UserInfoWrapper = styled.View`
  padding: 10px 5px;
  margin: 10% 8%;
`;

const BorderBottom = css`
  padding-bottom: 5px;
  border-bottom-width: 1px;
  border-color: #9E9E9E;
  margin-bottom: 20px;
`;

const BackGround = css`
  background-color: #e6e6e6;
  border-radius: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const ConfigText = css`
  font-size: 20px;
  color: #888;
  margin-bottom: 5px;
  font-family: 'Jua-Regular';
`;

const UserIconWrapper = styled.View`
  margin-left: 20px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: flex-end;
`;

type UserDataProps = {
  userData: { userName: string, userEmail: string },
  edit?: boolean
};
const EditMyInfoMainBody = ({
  userData: {
    userName,
    userEmail,
  },
  edit,
}: UserDataProps): JSX.Element => (
  <>
    <UserIconWrapper>
      <FontAwesomeIcon
        color="#888"
        size={40}
        icon={faUsersCog}
      />
      <Text style={ConfigText}>  내 계정 관리</Text>
    </UserIconWrapper>
    <View style={BackGround}>
      <UserInfoWrapper>
        <UserSpecSection style={BorderBottom} edit={edit} userInfo={{ title: '👤 Username', info: userName, userName }} />
        <UserSpecSection style={BorderBottom} edit={edit} userInfo={{ title: '📬 Email', info: userEmail, userName }} />
        <UserSpecSection style={BorderBottom} edit={edit} userInfo={{ title: '🔑 Password', info: '********', userName }} password />
      </UserInfoWrapper>
    </View>
  </>
);

EditMyInfoMainBody.defaultProps = {
  edit: true,
};

export default EditMyInfoMainBody;
