import React from 'react';
import styled, { css } from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const UserSpecSectionWrapper = styled.View`
  margin: 0 0 10px 5px;
`;
const UserInfoTitle = styled.Text`
  margin-bottom: 15px;
  font-size: 22px;
  font-family: 'Jua-Regular';
`;
const UserInfoBody = styled.Text`
  font-size: 18px;
  font-family: 'Jua-Regular';
`;
const EditUserInfoBtn = styled.TouchableOpacity`
  position: absolute;
  top: -10;
  right: 10;
  width: 30px;
  height: 30px;
  margin-top: 20px;
`;

type UserSpecProps = {
  userInfo: { title: string, info: string, userName: string },
  edit?: boolean,
  onPress?: () => void;
  style?: Record<string, string>
};

const UserSpecSection = ({
  userInfo: { title, info, userName },
  edit,
  onPress,
  style,
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
  const navigation = useNavigation();
  return (
    <>
      <UserSpecSectionWrapper style={style}>
        <UserInfoTitle>
          {title}
        </UserInfoTitle>
        <UserInfoBody>{info}</UserInfoBody>
        {edit
          ? (
            <EditUserInfoBtn onPress={onPress || (() => {
              navigation.navigate('EditInfoDetail', {
                userName,
                screenForId: screenFor,
                textInputSettings,
              });
            })}
            >
              <FontAwesomeIcon
                color="#888"
                size={20}
                icon={faChevronRight}
              />
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
  style: {},
};
export default UserSpecSection;
