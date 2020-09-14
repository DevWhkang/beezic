import React, { useState } from 'react';
import styled, { css } from '@emotion/native';
import Button from './Button';

type TextInputProps = {
  label: string,
  placeholder?: string,
  title?: string,
  password?: boolean,
  defaultValue?: string,
  message?: string,
  regex?: Record<string, unknown>,
  viewStyle?: Record<string, string>,
  labelStyle?: Record<string, string>,
  textInputStyle?: Record<string, string>,
  messageStyle?: Record<string, string>,
  background?: Record<string, string>,
  foreground?: Record<string, string>,
  onPress?: Record<string, string>,
  onChangeText?: (text) => void,
  disabled?: boolean,
};

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
  ${(props: TextInputProps) => props.title && `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 80%;
  `};
  padding: 10px 25px;
  font-size: 16px;
`;

const Message = styled.Text`
  font-size: 16px;
  font-family: 'BMHANNA_11yrs';
  color: #fc8a3d;
  right: 20px;
  margin-top: 3px;
  align-self: flex-end;
`;

const buttonBackground = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const TextInput = ({
  label, placeholder, password, defaultValue, message, regex,
  title, background, foreground, onPress, onChangeText, disabled,
  textInputStyle, messageStyle, viewStyle, labelStyle,
}: TextInputProps): JSX.Element => {
  const [value, setValue] = useState(defaultValue);
  const onChangeHandler = (text: string) => {
    if (regex.test(text[text.length - 1])) {
      setValue(text);
      onChangeText(text);
    }
  };
  return (
    <Container style={viewStyle}>
      <Label style={labelStyle}>{label}</Label>
      <FlexBox>
        <Input
          style={textInputStyle}
          placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
          title={!!title}
          value={value || defaultValue}
          onChangeText={onChangeHandler}
          secureTextEntry={password}
        />
        {!!title && (
          <Button
            title={title}
            background={Object.assign(background, buttonBackground)}
            foreground={foreground}
            onPress={onPress}
            disabled={disabled}
          />
        )}
      </FlexBox>
      <Message style={messageStyle}>{message}</Message>
    </Container>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  title: '',
  password: false,
  defaultValue: '',
  message: ' ',
  regex: new RegExp(),
  viewStyle: css``,
  labelStyle: css``,
  textInputStyle: css``,
  messageStyle: css``,
  background: css``,
  foreground: css``,
  onPress: () => { },
  onChangeText: () => { },
  disabled: false,
};

export default TextInput;
