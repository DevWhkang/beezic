import React from 'react';
import styled from '@emotion/native';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import EditUsername from '../components/MyInfo/EditUsername';

type EditMyInfoDetailPropTypes = {
  isLastPage: boolean,
  userName: string,
  screenFor: string,
  textInputSettings: Record<string, unknown>,
};

const EditScreenWrapper = styled.View`
  padding: 20px 10px;
`;

const EditMyInfoDetail = ({
  isLastPage,
  userName,
  screenFor,
  textInputSettings,
}: EditMyInfoDetailPropTypes):JSX.Element => {
  const cases = {
    username: (
      <EditUsername textInputSettings={textInputSettings} />
    ),
  };
  return (
    <>
      <MyInfoHeader
        isLastPage={isLastPage}
        userData={{ userName }}
      />
      <EditScreenWrapper>
        {cases[screenFor]}
      </EditScreenWrapper>
    </>
  );
};
export default EditMyInfoDetail;
