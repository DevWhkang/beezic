import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from '@emotion/native';

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
`;

const ButtonView = styled.View`
  margin-right: 10;
  margin-top: 10;
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
        <Button title="ADD" onPress={addCheckItemsHandler} />
      </ButtonView>
    </InputAreaView>
  );
};

export default CheckInsert;
