import React from 'react';
import styled from '@emotion/native';
import UserSpecSection from './UserSpecSection';

const UserInfoWrapper = styled.View`
  padding: 10px 5px;
  margin: 10% 8%;
`;

type UserDataProps = {
  userData: { userName:string, userEmail:string },
  edit? : boolean
};
const EditMyInfoMainBody = ({
  userData: {
    userName,
    userEmail,
  },
  edit,
}: UserDataProps): JSX.Element => (
  <>
    <UserInfoWrapper>
      <UserSpecSection edit={edit} userInfo={{ title: '👤 Username', info: userName, userName }} />
      <UserSpecSection edit={edit} userInfo={{ title: '📬 Email', info: userEmail, userName }} />
      <UserSpecSection edit={edit} userInfo={{ title: '🔑 Password', info: '********', userName }} password/>
    </UserInfoWrapper>
  </>
);

EditMyInfoMainBody.defaultProps = {
  edit: true,
};

export default EditMyInfoMainBody;
