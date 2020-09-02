import React from 'react';
import styled from '@emotion/native';

type LinkTextProps = {
  content: string,
}

const Text = styled.TextInput<LinkTextProps>`
  border-bottom-width: 1px;
  border-bottom-color: black;
  color: black;
  padding: 0;
  align-self: center;
`;

const LinkText = ({ content }: LinkTextProps) => (
  <Text editable={false} value={content} />
);

export default LinkText;
