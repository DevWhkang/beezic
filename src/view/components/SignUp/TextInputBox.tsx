import React from 'react';
import styled from '@emotion/native';
import { Alert } from 'react-native';

type TextBoxProps = {
  textName: string,
  buttonName: string,
}

const Container = styled.View`
  display: flex;
`;

const MiddleContainer = styled.View`
  margin-bottom: 50px;
  justify-content: space-around;
`;

const TextName = styled.Text`
  font-size: 15px;
  font-family: 'Jua-Regular';
  color: #333;
  margin-left: 30px;
  margin-bottom: 5px;
`;

const TextInputBox = styled.TextInput`
  height: 40px;
  width: 270px
  max-width: 270px;
  border-Color: #aaa;
  border-Width: 1px;
  margin-left: 30px;
  border-radius: 15px;
  background-color: #DADADA;
`;

const ButtonStlye = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 15px;
`;

const Button = styled.Button`
  color: #aaa;
`;

const UseTextInput = ({ textName, buttonName }:TextBoxProps) => {
  const [value, onChangeText] = React.useState('이곳에 입력 하세요');
  return (
    <Container>
      <TextName>{textName}</TextName>
      <MiddleContainer>
        <TextInputBox
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <ButtonStlye>
          <Button
            title={buttonName}
            onPress={() => Alert.alert('button pressed')}
          />
        </ButtonStlye>
      </MiddleContainer>
    </Container>
  );
};

export default UseTextInput;
