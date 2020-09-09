import React from 'react';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useObserver } from 'mobx-react';
import checkListStore from '../../../viewModel/CheckListStore';

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

const CheckInsert = (): JSX.Element => {
  const onChangeHandler = (eventDescription) => {
    checkListStore.setDescription(eventDescription);
  };
  const addButtonHandler = () => {
    if (checkListStore.description) {
      checkListStore.addCheckItems();
      checkListStore.setDescription('');
    }
  };

  return useObserver(() => (
    <InputAreaView>
      <InputCheck
        placeholder="직거래 할 때 체크해야 할 것을 알려주세요."
        onChangeText={onChangeHandler}
        value={checkListStore.description}
        autoCorrect={false}
      />
      <ButtonView>
        <PlusText onPress={addButtonHandler}>
          <FontAwesomeIcon icon={faPlus} style={plusIconStyle} size={20} />
        </PlusText>
      </ButtonView>
    </InputAreaView>
  ));
};

export default CheckInsert;
