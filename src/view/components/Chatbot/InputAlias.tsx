import React from 'react';
import { useObserver } from 'mobx-react';
import styled, { css } from '@emotion/native';
import { faEject } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ChatBotStore from '../../../viewModel/ChatBotStore';
import { ConfirmAliasMessage } from './BotMessages';

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
    font-size: 18px;
  }
`;

const ButtonView = styled.View`
  margin-right: 40;
  margin-top: 10;
`;

const PlusText = styled.Text`
  margin-top: 5px;
`;

const IconStyle = css`
  color: #D2691E;
`;

const InputAlias = (): JSX.Element => {
  const onChangeHandler = (inputAlias) => {
    ChatBotStore.setAlias(inputAlias);
  };
  const addButtonHandler = () => {
    if (ChatBotStore.alias) {
      ChatBotStore.setConfirmAlias();
      ChatBotStore.setMessages(ConfirmAliasMessage());
      ChatBotStore.setAlias('');
    }
  };

  return useObserver(() => (
    <InputAreaView>
      <InputCheck
        placeholder="해당 직거래의 별명을 알려주세요."
        onChangeText={onChangeHandler}
        value={ChatBotStore.alias}
        autoCorrect={false}
      />
      <ButtonView>
        <PlusText onPress={addButtonHandler}>
          <FontAwesomeIcon icon={faEject} style={IconStyle} size={25} />
        </PlusText>
      </ButtonView>
    </InputAreaView>
  ));
};

export default InputAlias;
