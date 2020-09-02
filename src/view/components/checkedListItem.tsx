import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ItemContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5;
  margin-bottom: 5;
  background-color: #FDF5E6;
  border-radius: 30px;
  border: 2px solid #dcdcdc;
  padding: 5px;
`;

const CircleView = styled.View`
  width: 30;
  height: 30;
  border-radius: 15px;
  border-color: #D2691E;
  border-width: 2px;
  margin-right: 15;
`;

const DiscriptionText = styled.Text`
  flex: 5;
  font-size: 15;
  margin-right: 10;
`;

const TrashIconText = styled.Text`
  margin-right: 10px;
`;

const checkIconStyle = css`
  margin-left: 3px;
  margin-top: 2px;
`;

const trashIconStyle = css`
  color: #DB631F;
`;

type Props = {
  id: number;
  discription: string;
  removeCheckItem: (id: number) => void;
}

const CheckedListItem = ({ id, discription, removeCheckItem } : Props) => {
  const removeCheckItemHandler = () => {
    removeCheckItem(id);
  };

  return (
    <ItemContainer>
      <TouchableOpacity>
        <CircleView>
          <FontAwesomeIcon icon={faCheck} style={checkIconStyle} size={20} />
        </CircleView>
      </TouchableOpacity>
      <DiscriptionText>{discription}</DiscriptionText>
      <TouchableOpacity>
        <TrashIconText onPress={removeCheckItemHandler}>
          <FontAwesomeIcon icon={faTrashAlt} style={trashIconStyle} size={20} />
        </TrashIconText>
      </TouchableOpacity>
    </ItemContainer>
  );
};

export default CheckedListItem;
