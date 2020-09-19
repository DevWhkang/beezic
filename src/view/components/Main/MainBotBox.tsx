import React from 'react';
import styled from '@emotion/native';

const TitleForm = styled.View`
  flex-direction: row;
  background-color: #F5AF64;
  align-self: center;
  width: 350px;
  border-radius: 30px;
  margin-bottom: 30px;
`;

const CheckListWrapper = styled.View`
  flex: 1;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: 20;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  color: white;
  font-family: 'Jua-Regular';
`;

const Content = styled.Text`
  font-size: 15;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  color: white;
`;

const BottomBox = (): JSX.Element => (
  <CheckListWrapper>
    <TitleForm>
      <Title>비직 하시면</Title>
      <Content>알아서 거래해 드려요.</Content>
    </TitleForm>
  </CheckListWrapper>
);

export default BottomBox;
