import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';

const HeaderTopWrapper = styled.TouchableOpacity`
  padding: 10px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
`;

const HeaderTopBack = (): JSX.Element => (
  <HeaderTopWrapper>
    <FontAwesomeIcon
      color="#fc8a3d"
      size={30}
      icon={faChevronLeft}
    />

  </HeaderTopWrapper>
);

export default HeaderTopBack;
