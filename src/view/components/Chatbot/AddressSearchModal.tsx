import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { useObserver } from 'mobx-react';
import styled, { css } from '@emotion/native';
import Postcode from 'react-native-daum-postcode';
import ChatBotStore from '../../../viewModel/ChatBotStore';
import { ConfirmMessage } from './BotMessages';

const ModalFormStyle = css`
  flex: 1;
`;

const ButtonView = styled.View`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 130px;
  margin-bottom: 10px;
`;

const SubmitText = styled.Text`
  margin-top: 5px;
  width: 170;
  padding-top: 12px;
  padding-bottom: 8px;
  text-align: center;
  color: white;
  font-size: 18;
  background-color: #329632;
  font-family: 'Jua-Regular';
  border-radius: 10px;
`;

const PostcodeStyle = css`
  /* height: 400; */
`;

const InputDetailAddress = styled.TextInput`
  border-bottom-color: #bbb;
  border-bottom-width: 1;
  padding-left: 3;
  margin-top:10;
  background-color: white;
  & > ::placeholder{
    font-family: 'Jua-Regular';
    font-size: 17px;
    padding-left: 12;
  }
`;

const AddressDisplayForm = styled.Text`
  padding-left: 12;
  padding-top: 17;
  font-size: 17;
  margin-top: 10;
  background-color: white;
  height: 50;
  font-family: 'Jua-Regular';
`;

const CloseButtonView = styled.View`
  width: 70;
  margin-left: 195;
`;

const CloseText = styled.Text`
  margin-top: 5px;
  padding-left: 18;
  padding-top: 9;
  height: 40;
  color: white;
  font-size: 20;
  background-color: #E56D29;
  font-family: 'Jua-Regular';
  border-radius: 10px;
`;

const SubmitButtonView = styled.View`
  width: 105;
`;

const FianlSubmitText = styled.Text`
  margin-top: 5px;
  padding-left: 18;
  padding-top: 9;
  height: 40;
  color: white;
  font-size: 20;
  background-color: #E56D29;
  font-family: 'Jua-Regular';
  border-radius: 10px;
`;

const ButtonAreaInModal = styled.View`
  /* flex: 1; */
  flex-direction: row;
`;

const AddressSearchModal = ({ buttonTextType, subTextType }): JSX.Element => {
  const buttonType = () => {
    let TextType;
    if (buttonTextType === '직거래 장소') {
      TextType = '직거래 장소';
    }
    if (buttonTextType === '픽업지') {
      TextType = '픽업지';
    }
    if (buttonTextType === '다시') {
      TextType = '다시';
    }
    return TextType;
  };

  const toggleModal = () => {
    ChatBotStore.setModalVisible();
    ChatBotStore.initAddress();
  };

  const handleAddress = (data) => {
    ChatBotStore.setAddress(data);
  };

  const handleDetailAddress = (eventAddress) => {
    ChatBotStore.setDetailAddress(eventAddress);
  };

  const onSubmit = () => {
    if (ChatBotStore.roadAddress && ChatBotStore.detailAddress) {
      const currentType = buttonType();
      ChatBotStore.setTotalAddress(subTextType);
      ChatBotStore.setMessages(ConfirmMessage(currentType));
      ChatBotStore.setModalVisible();
    }
  };

  return useObserver(() => (
    <View style={ModalFormStyle}>
      {buttonTextType
        && (
        <ButtonView>
          <SubmitText onPress={toggleModal}>
            {buttonType()}
            {' '}
            주소 찾기
          </SubmitText>
        </ButtonView>
        )}
      <Modal isVisible={ChatBotStore.modalVisible}>
        <View style={ModalFormStyle}>
          <Postcode
            style={PostcodeStyle}
            jsOptions={{ animated: true }}
            onSelected={(data) => handleAddress(data)}
          />
          {ChatBotStore.roadAddress.length > 0
            && (<AddressDisplayForm>{ChatBotStore.roadAddress}</AddressDisplayForm>)}
          <InputDetailAddress
            placeholder="  상세주소를 입력 해주세요. (지하철역, 동, 호수 등)"
            onChangeText={handleDetailAddress}
            value={ChatBotStore.detailAddress}
            autoCorrect={false}
          />
          <ButtonAreaInModal>
            <SubmitButtonView>
              <FianlSubmitText onPress={onSubmit}>
                알려주기
              </FianlSubmitText>
            </SubmitButtonView>
            <CloseButtonView>
              <CloseText onPress={toggleModal}>
                닫기
              </CloseText>
            </CloseButtonView>
          </ButtonAreaInModal>
        </View>
      </Modal>
    </View>
  ));
};

export default AddressSearchModal;
