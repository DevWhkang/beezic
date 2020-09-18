import React from 'react';
import styled, { css } from '@emotion/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useObserver } from 'mobx-react';
import { Text, View, TextInput } from 'react-native';
import checkListStore from '../../../viewModel/CheckListStore';

const InputAreaView = css`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputCheck = css`
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

const ButtonView = css`
  margin-right: 10;
  margin-top: 10;
`;

const PlusText = css`
  margin-top: 5px;
`;

const plusIconStyle = css`
  color: #D2691E;
`;

const CheckInsert = ({
  propsTextStyle, propsTextViewStyle, propsButtonStyle, propsButtonTextStyle,
}
: Record<string, unknown>): JSX.Element => {
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
    <View style={propsTextViewStyle || InputAreaView}>
      <TextInput
        placeholder={propsTextStyle ? '체크리스트 추가는 여기에 작성해주세요.' : '직거래 할 때 체크해야 할 것을 알려주세요.'}
        onChangeText={onChangeHandler}
        value={checkListStore.description}
        autoCorrect={false}
        style={propsTextStyle || InputCheck}
      />
      <View style={propsButtonStyle || ButtonView}>
        <Text style={propsButtonTextStyle || PlusText} onPress={addButtonHandler}>
          <FontAwesomeIcon icon={faPlus} style={plusIconStyle} size={20} />
        </Text>
      </View>
    </View>
  ));
};

export default CheckInsert;
