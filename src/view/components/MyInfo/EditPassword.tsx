import React from 'react';
import styled, { css } from '@emotion/native';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../TextInput';
import Button from '../Button';

type EditPasswordPropTypes = {
  textInputSettings:{
    labelStyle: Record<string, unknown>,
    textInputStyle: Record<string, unknown>,
    viewStyle:Record<string, unknown>,
    background:Record<string, unknown>,
    label: string,
    placeholder:string,
    onPress: () => void
  }
};
const buttonStyle = css`
  background: #ff8a3d;
  margin-right:10px;
`;
const FlatButton = styled.View`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const MarginBottom = styled.View`
  margin-bottom: 30px;
`;

const EditPassword = ({
  textInputSettings: {
    labelStyle,
    textInputStyle,
    viewStyle,
    label,
    placeholder,
    background,
    onPress,
  },
}: EditPasswordPropTypes):JSX.Element => {
  const navigation = useNavigation();
  return (
    <>
      <MarginBottom>
        <TextInput
          password
          labelStyle={labelStyle}
          textInputStyle={textInputStyle}
          viewStyle={viewStyle}
          label={label}
          placeholder={placeholder}
          background={background}
          onPress={Keyboard.dismiss}
        />
      </MarginBottom>
      <MarginBottom>
        <TextInput
          password
          labelStyle={labelStyle}
          textInputStyle={textInputStyle}
          viewStyle={viewStyle}
          label={`${label} 확인`}
          placeholder={placeholder}
          background={background}
          onPress={Keyboard.dismiss}
        />
      </MarginBottom>
      <FlatButton>
        <Button
          title="바꾸기"
          background={buttonStyle}
          onPress={Keyboard.dismiss}
        />
        <Button
          title="취소하기"
          background={buttonStyle}
          onPress={() => navigation.goBack()}
        />
      </FlatButton>
    </>
  );
};
export default EditPassword;
