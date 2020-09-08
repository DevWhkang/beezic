import React from 'react';
import { css } from '@emotion/native';
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
}: EditPasswordPropTypes):JSX.Element => (
  <>
    <TextInput
      password
      labelStyle={labelStyle}
      textInputStyle={textInputStyle}
      viewStyle={viewStyle}
      label={label}
      placeholder={placeholder}
      background={background}
      onPress={onPress}
    />
    <TextInput
      password
      labelStyle={labelStyle}
      textInputStyle={textInputStyle}
      viewStyle={viewStyle}
      label={`${label} 확인`}
      placeholder={placeholder}
      background={background}
      onPress={onPress}
    />
    <Button
      title="바꾸기"
      background={buttonStyle}
    />
  </>
);
export default EditPassword;
