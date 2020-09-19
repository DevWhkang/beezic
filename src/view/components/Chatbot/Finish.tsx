import React from 'react';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import bee from '../../../assets/bee.png';
import { ChatBotStore, UserStore, AssignmentStore } from '../../../viewModel';

const FinishImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Container = styled.View`

`;

const FinishView = styled.View`
  margin-right: 70px;
  margin-bottom: 10px;
`;

const FinishText = styled.Text`
  margin-top: 20px;
  color: #E56D29;
  font-size: 25;
  font-family: 'Jua-Regular';
  /* text-align: center; */
  text-decoration-line: underline;
  margin-left: 120;
`;

const Finish = (): JSX.Element => {
  const navigation = useNavigation();

  const onFinish = () => {
    const user = {
      uid: UserStore.user.uid,
      displayName: UserStore.user.displayName,
    };
    // viewModel의 Action 사용
    ChatBotStore.addReservation(user);
    AssignmentStore.getStaffList();
    navigation.navigate('StaffAssignment');
  };

  return useObserver(() => (
    <Container>
      <FinishImage source={bee} />
      <FinishView>
        <FinishText onPress={onFinish}>
          Finish
        </FinishText>
      </FinishView>
    </Container>
  ));
};

export default Finish;
