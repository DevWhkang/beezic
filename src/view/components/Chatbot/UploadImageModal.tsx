import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { useObserver } from 'mobx-react';
import styled, { css } from '@emotion/native';
import ChatBotStore from '../../../viewModel/ChatBotStore';
import Camera from './Camera';

const ModalFormStyle = css`
  flex: 1;
  border-radius: 10px;
`;

const ButtonView = styled.View`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 130px;
  margin-bottom: 10px;
`;

const ToggleText = styled.Text`
  margin-top: 5px;
  width: 170;
  padding-top: 6;
  height: 30;
  text-align: center;
  color: white;
  font-size: 18;
  background-color: #E56D29;
  font-family: 'Jua-Regular';
  border-radius: 10px;
`;

const UploadImageModal = ({ buttonTextType }): JSX.Element => {
  const toggleModal = () => {
    ChatBotStore.setCameraModalVisible();
  };

  return useObserver(() => (
    <View style={ModalFormStyle}>
      {buttonTextType
        && (
        <ButtonView>
          <ToggleText onPress={toggleModal}>
            사진 업로드 하기
          </ToggleText>
        </ButtonView>
        )}
      <Modal isVisible={ChatBotStore.cameraModalVisible}>
        <View style={ModalFormStyle}>
          <Camera />
        </View>
      </Modal>
    </View>
  ));
};

export default UploadImageModal;
