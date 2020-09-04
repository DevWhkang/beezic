import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';

const HeaderTopWrapper = styled.Text`
  padding: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`;

export default (): JSX.Element => (
  <HeaderTopWrapper>
    <FontAwesomeIcon
      color="#fc8a3d"
      size={30}
      icon={faChevronLeft}
    />

  </HeaderTopWrapper>
);
