import React from 'react';
import { css } from '@emotion/native';
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
  background: #ff8a3d;
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
}: EditEmailPropTypes):JSX.Element => (
  <>
    <TextInput
      labelStyle={labelStyle}
      textInputStyle={textInputStyle}
      viewStyle={viewStyle}
      label={label}
      title="보내기"
      placeholder={placeholder}
      background={background}
      onPress={onPress}
    />
    <TextInput
      labelStyle={labelStyle}
      textInputStyle={textInputStyle}
      viewStyle={viewStyle}
      label="Verification Code"
      title="확인"
      placeholder="Verification Code"
      background={background}
      onPress={onPress}
    />
    <Button
      title="바꾸기"
      background={buttonStyle}
    />
  </>
);
export default EditEmail;
