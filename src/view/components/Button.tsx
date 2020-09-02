import React from 'react';
import styled, { css } from '@emotion/native';

type ButtonProps = {
  title: string,
  background?: object,
  foreground?: object,
  onPress?: object,
}

const TouchableButton = styled.TouchableOpacity<ButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: gray;
  border-radius: 100px;
  /* width: 100px; */
  align-self: center;
`;

const Text = styled.Text<ButtonProps>`
  color: white;
  font-family: 'Jua-Regular';
  font-size: 26.6px;
  font-weight: 600;
  margin: 10px;
  align-self: center;
`;

const Button = ({
  title, background, foreground, onPress,
}: ButtonProps) => (
  <TouchableButton
    style={background}
    onPress={onPress}
    activeOpacity={0.5} // default: 0.2
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
  onPress: () => {},
};

export default Button;
