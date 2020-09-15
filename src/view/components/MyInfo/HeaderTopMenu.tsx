import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

const HeaderTopWrapper = styled.TouchableOpacity`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const HeaderTopMenu = (): JSX.Element => {
  const navigation = useNavigation();
  return (
  <HeaderTopWrapper
    onPress = {() => navigation.openDrawer()}
  >
    <FontAwesomeIcon
      color="#fc8a3d"
      size={40}
      icon={faBars}
    />
  </HeaderTopWrapper>
);}
export default HeaderTopMenu;
