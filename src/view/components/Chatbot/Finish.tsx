import React from 'react';
import styled from '@emotion/native';
import bee from '../../../assets/bee.png';
import StaffAssignment from '../../screens/StaffAssignment';

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
  text-align: center;
  text-decoration-line: underline;
`;

const ChangeView = styled.View`
  flex: 1;
`;

const Finish = (): JSX.Element => {
  const onFinish = () => (
    <ChangeView>
      <StaffAssignment />
    </ChangeView>
  );
  return (
    <Container>
      <FinishImage source={bee} />
      <FinishView>
        <FinishText onPress={onFinish}>
          Finish
        </FinishText>
      </FinishView>
    </Container>
  );
};

export default Finish;
