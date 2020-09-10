import React from 'react';
import styled from '@emotion/native';

type LinkTextProps = {
  content: string,
  size: number,
  onPress: () =>void
};

const LinkTextWrapper = styled.TouchableOpacity``;
const Text = styled.TextInput<LinkTextProps>`
  border-bottom-width: 1px;
  border-bottom-color: black;
  color: black;
  padding: 0;
  align-self: center;
`;

const LinkText = ({ content, size, onPress }: LinkTextProps): JSX.Element => (
  <>
    <LinkTextWrapper
      onPress={onPress}
    >
      <Text
        editable={false}
        value={content}
        style={{ fontSize: size }}
      />
    </LinkTextWrapper>
  </>
);

export default LinkText;
