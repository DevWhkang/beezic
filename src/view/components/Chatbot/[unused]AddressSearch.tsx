import Postcode from 'react-native-daum-postcode';
import { KeyboardAvoidingView } from 'react-native';
import React from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import ChatBotStore from '../../../viewModel/ChatBotStore';
import { ConfirmMessage } from './BotMessages';

const PostcodeStyle = css`
  height: 400;
  width: 350;
  margin-top: 10px;
`;

const InputDetailAddress = styled.TextInput`
  border-bottom-color: #bbb;
  border-bottom-width: 1;
  padding-left: 3;
  margin-right: 54;
  margin-top:10;
  background-color: white;
  & > ::placeholder{
    font-family: 'Jua-Regular';
    font-size: 17px;
    padding-left: 12;
  }
`;

const ButtonView = styled.View`
  margin-left: 270;
`;

const SubmitText = styled.Text`
  margin-top: 5px;
  margin-right: 55;
  padding-left: 9;
  padding-top: 6;
  height: 30;
  color: white;
  font-size: 18;
  background-color: #E56D29;
  font-family: 'Jua-Regular';
  border-radius: 10px;
`;

const AddressDisplayForm = styled.Text`
  padding-left: 12;
  padding-top: 17;
  font-size: 17;
  margin-top: 10;
  margin-right: 54;
  background-color: white;
  height: 50;
  font-family: 'Jua-Regular';
`;

const AddressSearch = (): JSX.Element => {
  const handleAddress = (data) => {
    ChatBotStore.setAddress(data);
  };

  const onSubmit = () => {
    if (ChatBotStore.roadAddress && ChatBotStore.detailAddress) {
      ChatBotStore.setTotalAddress();
      ChatBotStore.setMessages(ConfirmMessage());
      ChatBotStore.initAddress();
    }
  };

  const handleDetailAddress = (eventAddress) => {
    ChatBotStore.setDetailAddress(eventAddress);
  };

  return useObserver(() => (
    <>
      <Postcode
        style={PostcodeStyle}
        jsOptions={{ animated: true }}
        onSelected={(data) => handleAddress(data)}
      />
      <KeyboardAvoidingView behavior="height">
        {ChatBotStore.roadAddress.length > 0
        && (<AddressDisplayForm>{ChatBotStore.roadAddress}</AddressDisplayForm>)}
        <InputDetailAddress
          placeholder="  상세주소를 입력 해주세요. (지하철역, 동, 호수 등)"
          onChangeText={handleDetailAddress}
          value={ChatBotStore.detailAddress}
          autoCorrect={false}
        />
        <ButtonView>
          <SubmitText onPress={onSubmit}>
            알려주기
          </SubmitText>
        </ButtonView>
      </KeyboardAvoidingView>
    </>
  ));
};

export default AddressSearch;
