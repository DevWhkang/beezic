import React from 'react';
import styled, { css } from '@emotion/native';
import { Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faCartPlus, faCarrot } from '@fortawesome/free-solid-svg-icons';

type ButtonProps = {
  title: string,
  background?: Record<string, string>,
  foreground?: Record<string, string>,
  onPress?: () => void,
  disabled?: boolean,
};

const ButtonView = styled.View`
  flex: 1;
  flex-direction: column;
  margin-right: 20px;
`;

const TouchableButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: gray;
  border-radius: 100px;
  align-self: flex-end;
  opacity: ${(props: ButtonProps) => (props.disabled ? '0.5' : '1')};
  position: absolute;
  bottom: 0px;
`;

const Text = styled.Text`
  color: white;
  font-family: 'Jua-Regular';
  font-size: 26.6px;
  font-weight: 600;
  margin: 16px 16px;
  align-self: center;
`;

const FixButtonStyle = css`
  color: white;
`;

const FixButton = ({
  title, background, foreground, onPress, disabled,
}: ButtonProps): JSX.Element => (
  <ButtonView>
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
        <FontAwesomeIcon size={35} icon={faCarrot} style={FixButtonStyle} />
      </Text>
    </TouchableButton>
  </ButtonView>
);

FixButton.defaultProps = {
  background: css``,
  foreground: css``,
  onPress: () => { },
  disabled: false,
};

export default FixButton;
