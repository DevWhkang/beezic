import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';

const HeaderTopWrapper = styled.Text`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export default () => (
  <HeaderTopWrapper>
    <FontAwesomeIcon
      color="#fc8a3d"
      size={40}
      icon={faBars}
    />
  </HeaderTopWrapper>
);
