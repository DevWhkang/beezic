import React from 'react';
import styled from '@emotion/native';
import { useRoute } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import EditUsername from '../components/MyInfo/EditUsername';
import EditEmail from '../components/MyInfo/EditEmail';
import EditPassword from '../components/MyInfo/EditPassword';

type EditMyInfoDetailPropTypes = {
  isLastPage: boolean,
};

const EditScreenWrapper = styled.View`
  padding: 20px 10px;
`;

const EditMyInfoDetail = ({
  isLastPage,
}: EditMyInfoDetailPropTypes):JSX.Element => {
  const route = useRoute();
  const { screenForId, textInputSettings, userName } = route.params;
  const cases = {
    username: (
      <EditUsername textInputSettings={textInputSettings} />
    ),
    email: (
      <EditEmail textInputSettings={textInputSettings} />
    ),
    password: (
      <EditPassword textInputSettings={textInputSettings} />
    ),
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <MyInfoHeader
            isLastPage={isLastPage}
            userData={{ userName }}
          />
          <EditScreenWrapper>
            {cases[screenForId]}
          </EditScreenWrapper>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};
export default EditMyInfoDetail;
