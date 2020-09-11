import React from 'react';
import styled, { css } from '@emotion/native';

type LinkTextProps = {
  content: string,
  style?: Record<string, string>,
  onPress?: () => void,
};

const TouchableButton = styled.TouchableOpacity`

`;

const Text = styled.TextInput<LinkTextProps>`
  border-bottom-width: 1px;
  border-bottom-color: black;
  color: black;
  padding: 0;
  align-self: center;
`;

const LinkText = ({
  content, style, onPress,
}: LinkTextProps): JSX.Element => {
  const linkHandler = () => {
    onPress();
  };

  return (
    <TouchableButton onPress={linkHandler} activeOpacity={0.6}>
      <Text editable={false} value={content} style={style} />
    </TouchableButton>
  );
};

LinkText.defaultProps = {
  style: css``,
  onPress: () => { },
};

export default LinkText;
