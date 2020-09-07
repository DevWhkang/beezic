import React from 'react';
import styled, { css } from '@emotion/native';
import { Text } from 'react-native';

const UserSpecSectionWrapper = styled.View`
  margin: 0 0 10px 5px;
`;
const UserInfoTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 22px;
`;
const UserInfoBody = styled.Text`
  font-size: 18px;
`;
const EditUserInfoBtn = styled.TouchableOpacity`
  position: absolute;
  top: -10;
  right: 10;
  width: 30px;
  height: 30px;
`;
const EditBtnStyle = css`
  font-size: 20px;
`;

type UserSpecProps = {
  userInfo: {title: string, info: string},
  edit?: boolean,
  onPress?: ()=>void;
};
const UserSpecSection = ({
  userInfo: { title, info },
  edit,
  onPress,
}: UserSpecProps): JSX.Element => (
  <UserSpecSectionWrapper>
    <UserInfoTitle>
      {title}
    </UserInfoTitle>
    <UserInfoBody>{info}</UserInfoBody>
    {edit
      ? (
        <EditUserInfoBtn onPress={onPress}>
          <Text style={EditBtnStyle}>{' 📝 '}</Text>
        </EditUserInfoBtn>
      )
      : null}
  </UserSpecSectionWrapper>
);

UserSpecSection.defaultProps = {
  onPress: null,
  edit: false,
};
export default UserSpecSection;
