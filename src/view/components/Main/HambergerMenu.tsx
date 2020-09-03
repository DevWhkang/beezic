import React from 'react';
import styled from '@emotion/native';
import {
  TouchableOpacity, Alert,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderMenu = styled.Text`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

function HambergerMenu() {
  return (
    <HeaderMenu containerStyle={{ backgroundColor: 'white' }}>
      <TouchableOpacity onPress={() => Alert.alert('Navi로 이동하면됨')}>
        <FontAwesomeIcon
          color="#aaa"
          size={40}
          icon={faBars}
        />
      </TouchableOpacity>
    </HeaderMenu>
  );
}

export default HambergerMenu;
