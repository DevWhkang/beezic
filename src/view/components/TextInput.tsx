import React, { useState } from 'react';
import styled, { css } from '@emotion/native';
import Button from './Button.tsx';

type TextInputProps = {
  label: string,
  placeholder?: string,
  title?: string,
  password?: boolean,
  viewStyle?: object,
  labelStyle?: object,
  textInputStyle?: object,
  background?: object,
  foreground?: object,
  onPress?: object,
}

const Container = styled.View<TextInputProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
`;

const Label = styled.Text<TextInputProps>`
  width: 100%;
  margin-left: 50px;
  font-size: 20px;
  font-family: 'BMEULJIRO';
`;

const FlexBox = styled.View<TextInputProps>`
  display: flex;
  flex-direction: row;
`;

const Input = styled.TextInput<TextInputProps>`
  flex-shrink: 1;
  height: 50px;
  border: 2px solid #888;
  border-radius: 100px;
  width: 100%;
  ${(props) => props.title && `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 80%;
  `};
  padding: 10px 25px;
  font-size: 16px;
`;

const buttonBackground = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const TextInput = ({
  viewStyle, label, labelStyle, placeholder, password,
  textInputStyle, title, background, foreground, onPress,
}: TextInputProps) => {
  const [value, setValue] = useState('');
  return (
    <Container style={viewStyle}>
      <Label style={labelStyle}>{label}</Label>
      <FlexBox>
        <Input
          style={textInputStyle}
          placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
          title={!!title}
          value={value}
          onChangeText={(text) => setValue(text)}
          secureTextEntry={password}
        />
        {!!title && (
        <Button
          title={title}
          background={Object.assign(background, buttonBackground)}
          foreground={foreground}
          onPress={onPress}
        />
        )}
      </FlexBox>
    </Container>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  title: '',
  password: false,
  viewStyle: css``,
  labelStyle: css``,
  textInputStyle: css``,
  background: css``,
  foreground: css``,
  onPress: () => {},
};

export default TextInput;
