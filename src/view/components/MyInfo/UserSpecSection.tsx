import React from 'react';
import styled from '@emotion/native';

const UserSpecSection = styled.View`
  margin: 0 0 10px 5px;
`;
const UserInfoTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 22px;
`;
const UserInfoBody = styled.Text`
  font-size: 18px;
`;
export default (props: object) => {
  const { userInfo: { title, info } } = props;
  return (
    <UserSpecSection>
      <UserInfoTitle>{title}</UserInfoTitle>
      <UserInfoBody>{info}</UserInfoBody>
    </UserSpecSection>
  );
};
