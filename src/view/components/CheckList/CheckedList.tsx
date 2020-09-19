import React from 'react';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
import { useObserver } from 'mobx-react';
import CheckedListItem from './CheckedListItem';
import checkListStore from '../../../viewModel/CheckListStore';

const ScrollForm = styled.View`
  height: 500px;
`;

const CheckedList = (): JSX.Element => useObserver(() => (
  <ScrollForm>
    <ScrollView>
      {checkListStore.checkItems.map((checkItem: Record<string, unknown>) => (
        <CheckedListItem
          key={checkItem.id}
          id={checkItem.id}
          description={checkItem.description}
        />
      ))}
    </ScrollView>
  </ScrollForm>
));

export default CheckedList;
