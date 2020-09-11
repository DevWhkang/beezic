import React from 'react';
import styled, { css } from '@emotion/native';
import { Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../TextInput';
import Button from '../Button';

type EditEmailPropTypes = {
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
  margin-right:10px;
  background: #ff8a3d;
`;

const FlatButton = styled.View`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const EditEmail = ({
  textInputSettings: {
    labelStyle,
    textInputStyle,
    viewStyle,
    label,
    placeholder,
    background,
    onPress,
  },
}: EditEmailPropTypes):JSX.Element => {
  const navigation = useNavigation();
  return (
    <>
      <TextInput
        labelStyle={labelStyle}
        textInputStyle={textInputStyle}
        viewStyle={viewStyle}
        label={label}
        title="보내기"
        placeholder={placeholder}
        background={background}
        onPress={Keyboard.dismiss}
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
export default EditEmail;
