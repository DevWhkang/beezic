import React from 'react';
import styled from '@emotion/native';

const DrawerListMenuItem = styled.TouchableOpacity`
  background-color: #ff8a3d;
  margin: 5px 10px;
`;
const DrawerListMenuText = styled.Text`
  font-family: 'BMEULJIRO';
  font-size: 20px;
  background-color: #fff;
  padding: 3px 8px;
`;
const DrawerSectionLiner = styled.View`
    border-bottom-color: #ff8a3d;
    border-bottom-width: 0.8px;
    width: 100%;
`;

const emojiList = {
  home: '🏠',
  myBeezic: '🥕',
  myInfo: '📝',
  go: '✈️',
  notice: '📌',
  'Q&A': '🙋',
  contact: '❓',
  logout: '😿',
};
type DrawerListMenuPropTypes ={
  title: string,
  emoji: string,
  isLast: boolean,
  onPress? : () => void,

};
function DrawerListMenu({
  title, emoji, isLast, onPress,
}:DrawerListMenuPropTypes): JSX.Element {
  return (
    <>
      <DrawerListMenuItem onPress={onPress}>
        <DrawerListMenuText>
          {`${emojiList[emoji]}  ${title}`}
        </DrawerListMenuText>
      </DrawerListMenuItem>
      {isLast ? <DrawerSectionLiner /> : null }
    </>
  );
}

DrawerListMenu.defaultProps = {
  onPress: () => null,
};

export default DrawerListMenu;
