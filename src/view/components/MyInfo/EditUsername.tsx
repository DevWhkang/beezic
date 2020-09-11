import React from 'react';
import styled, { css } from '@emotion/native';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../TextInput';
import Button from '../Button';

type EditUsernamePropTypes = {
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
    margin-top: 30px;
    background: #ff8a3d;
    margin-right:10px;
`;

const FlatButton = styled.View`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const EditUsername = ({
  textInputSettings: {
    labelStyle,
    textInputStyle,
    viewStyle,
    label,
    placeholder,
    background,
    onPress,
  },
}: EditUsernamePropTypes):JSX.Element => {
  const navigation = useNavigation();
  return (
    <>
      <TextInput
        labelStyle={labelStyle}
        textInputStyle={textInputStyle}
        viewStyle={viewStyle}
        label={label}
        placeholder={placeholder}
        background={background}
        onPress={onPress}
      />

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
export default EditUsername;
