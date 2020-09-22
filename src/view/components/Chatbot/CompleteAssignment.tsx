import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { css } from '@emotion/native';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WebView from 'react-native-webview';
import { AssignmentStore, ChatBotStore } from '../../../viewModel';

const assignmentTitleStyle = css`
  font-family: 'BMHANNA_11yrs';
  align-self: center;
  font-size: 35px;
  margin-top: 50;
  margin-bottom: 20;
  color: #464646;
`;
const assignmentStaffAreaStyle = css`
  height: 500px;
  background-color: #c8c8c8;
  border-radius: 10px;
`;

const assignmentStaffImageAreaStyle = css`
  height: 300px;
  background-color: #c8c8c8;
  margin: 30px;
  border-radius: 20px;

`;

const introduceAreaStyle = css`
  margin: 40px;
`;

const introduceTextStyle = css`
  font-family: 'BMHANNA_11yrs';
  font-size: 20px;
  color: #464646;
  align-self: center;
`;

const AnnouncementStyle = css`
  margin-top: 15px;
  align-items: center;
`;

const AnnouncementTextStyle = css`
  font-family: 'BMHANNA_11yrs';
  color: #8c8c8c;
  font-size: 15;
`;

const emptyImageStyle = css`
  align-self: center;
  margin-top: 120px;
  margin-left: 30px;
  font-family: 'BMHANNA_11yrs';
  font-size: 25;
  color: #8c8c8c;
  opacity: 0.6;
`;

const staffProfileImageStyle = css`
  height: 330px;
  width: 200px;
  align-self: center;
`;
const CompleteAssignment = (): JSX.Element => {
  const navigation = useNavigation();

  useEffect(() => {
    ChatBotStore.falseIsReservation();
    AssignmentStore.updateDoc();
  }, []);

  // setTimeout(() => {
  //   navigation.navigate('CheckList');
  // }, 5000);

  return useObserver(() => (
    <View>
      <Text style={assignmentTitleStyle}>비직 직원이 배정 되었어요!</Text>
      <View style={assignmentStaffAreaStyle}>
        <View style={assignmentStaffImageAreaStyle}>
          {AssignmentStore.selectedStaff.staffProfile.image
            ? (
              <WebView
                style={staffProfileImageStyle}
                source={{ uri: AssignmentStore.selectedStaff.staffProfile.image }}
              />
            )
            : (
              <View>
                <Text style={emptyImageStyle}>
                  {`${AssignmentStore.selectedStaff.staffProfile.name} 직원의 사진이 없네요...\
                  \n      빨리 업로드 할게요!`}
                </Text>
              </View>
            )}
        </View>
        <View style={introduceAreaStyle}>
          <Text style={introduceTextStyle}>
            {AssignmentStore.selectedStaff.staffProfile.introduce}
          </Text>
        </View>
      </View>
      <View style={AnnouncementStyle}>
        <Text style={AnnouncementTextStyle}>
          몇 초 뒤에 체크리스트 작성 페이지로 이동합니다.
        </Text>
      </View>
    </View>
  ));
};

export default CompleteAssignment;
