import React from 'react';
import styled, { css } from '@emotion/native';
import { Text } from 'react-native';
import EditMyInfoDetail from '../../screens/EditMyInfoDetail';

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
  userInfo: {title: string, info: string, userName: string},
  edit?: boolean,
  onPress?: ()=>void;
};

const UserSpecSection = ({
  userInfo: { title, info, userName },
  edit,
  onPress,
}: UserSpecProps): JSX.Element => {
  const screenFor = title.split(' ')[1].toLowerCase();
  const textInputSettings = {
    labelStyle: css``,
    textInputStyle: css``,
    viewStyle: css``,
    background: css`
      background: #ff8a3d;
    `,
    label: screenFor,
    placeholder: info,
  };

  return (
    <>
      <UserSpecSectionWrapper>
        <UserInfoTitle>
          {title}
        </UserInfoTitle>
        <UserInfoBody>{info}</UserInfoBody>
        {edit
          ? (
            <EditUserInfoBtn onPress={onPress || (() => {
              /* FIXME 네비게이션 적용하여 클릭이벤트로 다음과 같은 방식으로 네비게이팅 해야함
              <EditMyInfoDetail
                isLastPage
                userName={userName}
                screenFor={screenFor}
                textInputSettings={textInputSettings}
              />;
              */
            })}
            >
              <Text style={EditBtnStyle}>{' 📝 '}</Text>
            </EditUserInfoBtn>
          )
          : null}
      </UserSpecSectionWrapper>
    </>
  );
};

UserSpecSection.defaultProps = {
  onPress: null,
  edit: false,
};
export default UserSpecSection;
