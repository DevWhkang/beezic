import React from 'react';
import styled from '@emotion/native';

type LinkTextProps = {
  content: string,
  size: number,
}

const Text = styled.TextInput<LinkTextProps>`
  border-bottom-width: 1px;
  border-bottom-color: black;
  color: black;
  padding: 0;
  align-self: center;
`;

const LinkText = ({ content, size }: LinkTextProps) => (
  <Text editable={false} value={content} style={{ fontSize: size }} />
);

export default LinkText;
