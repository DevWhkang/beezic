import React from 'react';
import styled, { css } from '@emotion/native';

type ButtonProps = {
  title: string,
  background?: Record<string, string>,
  foreground?: Record<string, string>,
  onPress?: () => void,
  disabled?: boolean,
};

const TouchableButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: gray;
  border-radius: 100px;
  /* width: 100px; */
  align-self: center;
  opacity: ${(props: ButtonProps) => (props.disabled ? '0.5' : '1')}
`;

const Text = styled.Text`
  color: white;
  font-family: 'Jua-Regular';
  font-size: 26.6px;
  font-weight: 600;
  margin: 10px 20px;
  align-self: center;
`;

const Button = ({
  title, background, foreground, onPress, disabled,
}: ButtonProps): JSX.Element => (
  <TouchableButton
    disabled={disabled}
    style={background}
    onPress={onPress}
    activeOpacity={0.5}
  >
    <Text
      style={foreground}
      numberOfLines={1}
    >
      {title}
    </Text>
  </TouchableButton>
);

Button.defaultProps = {
  background: css``,
  foreground: css``,
  onPress: () => { },
  disabled: false,
};

export default Button;
