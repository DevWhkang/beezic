import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styled from '@emotion/native';
import CheckedInsert from '../components/checkedInsert.tsx';
import CheckedList from '../components/checkedlist.tsx';

const TitleText = styled.Text`
  font-size: 40;
  text-align: center;
  margin-top: 30;
  margin-bottom: 30;
  color: #D2691E;
  font-weight: bold;
`;

const CheckAreaView = styled.View`
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  margin-left: 10;
  margin-right: 10;
`;

const CheckList = () => {
  const [checkItems, setCheckItems] = useState([]);

  const addCheckItems = (text: string): void => {
    setCheckItems([
      { id: Math.floor(Math.random() * 100) + 1, discription: text, checked: false },
      ...checkItems,
    ]);
  };

  const removeCheckItem = (id: number): void => {
    const list = [...checkItems];
    list.splice(id, 1);
    setCheckItems(list);
  };

  return (
    <SafeAreaView>
      <TitleText>Check List</TitleText>
      <CheckAreaView>
        <CheckedInsert addCheckItems={addCheckItems} />
        <CheckedList checkItems={checkItems} removeCheckItem={removeCheckItem} />
      </CheckAreaView>
    </SafeAreaView>
  );
};

export default CheckList;
