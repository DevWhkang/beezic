import React from 'react';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
import { useObserver } from 'mobx-react';
import CheckedListItem from './checkedListItem.tsx';
import checkListStore from '../../../viewModel/store.ts';

const ScrollForm = styled.View`
  height: 400px;
`;

const CheckedList = () => useObserver(() => (
  <>
    <ScrollForm>
      <ScrollView>
        {checkListStore.checkItems.map((checkItem) => (
          <CheckedListItem
            key={checkItem.id}
            id={checkItem.id}
            description={checkItem.description}
          />
        ))}
      </ScrollView>
    </ScrollForm>
  </>
));

export default CheckedList;
