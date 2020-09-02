import React, { useState } from 'react';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const InputAreaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputCheck = styled.TextInput`
  border-bottom-color: #bbb;
  border-bottom-width: 1;
  font-size: 17;
  margin-left: 10;
  margin-right: 10;
  margin-top:10;
  flex: 1;
  & > ::placeholder{
    font-family: 'Jua-Regular';
    font-size: 20px;
  }
`;

const ButtonView = styled.View`
  margin-right: 10;
  margin-top: 10;
`;

const PlusText = styled.Text`
  margin-top: 5px;
`;

const plusIconStyle = css`
  color: #D2691E;
`;

type Props = {
  addCheckItems: () => void;
}

const CheckInsert = ({ addCheckItems }: Props) => {
  const [newCheckItem, setNewCheckItem] = useState('');

  const newCheckItemInputHandler = (checkItem) => {
    setNewCheckItem(checkItem);
  };
  const addCheckItemsHandler = () => {
    addCheckItems(newCheckItem);
    setNewCheckItem('');
  };

  return (
    <InputAreaView>
      <InputCheck
        placeholder="직거래 할 때 체크해야 할 것을 알려주세요."
        onChangeText={newCheckItemInputHandler}
        value={newCheckItem}
        autoCorrect={false}
      />
      <ButtonView>
        <PlusText onPress={addCheckItemsHandler}>
          <FontAwesomeIcon icon={faPlus} style={plusIconStyle} size={20} />
        </PlusText>
      </ButtonView>
    </InputAreaView>
  );
};

export default CheckInsert;
