import React from 'react';
import styled from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { StackNavigationProp } from '@react-navigation/stack';

const HeaderMenu = styled.TouchableOpacity`
  padding: 10px;
  display: flex;
`;

type CloseMenuPropTypes = {
  closeButtonHandler:StackNavigationProp
};

function CloseMenu({ closeButtonHandler }:CloseMenuPropTypes): JSX.Element {
  return (
    <HeaderMenu
      onPress={closeButtonHandler}
      containerStyle={{ backgroundColor: 'white' }}
    >
      <FontAwesomeIcon
        color="#aaa"
        size={40}
        icon={faTimes}
      />
    </HeaderMenu>
  );
}

export default CloseMenu;
