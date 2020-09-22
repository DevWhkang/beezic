import React from 'react';
import Modal from 'react-native-modal';
import { Text, View } from 'react-native';
import styled, { css } from '@emotion/native';

const ModalView = styled.View`
  align-self: center;
  justify-self: center;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  background-color: white;
  justify-content: flex-end;
`;

const ModalContent = styled.Text`
  font-family: 'BMHANNAPro';
  color: black;
  font-size: 25px;
  margin-bottom: 5px;
  text-align: center;
`;

const ModalDescription = styled.Text`
  font-family: 'BMHANNAPro';
  color: #333;
  font-size: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

const ModalButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
  border-top-style: solid;
  border-top-color: #888;
  border-top-width: 1px;
`;

const ModalLaterButton = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 0;
`;

const laterTextStyle = css`
  color: black;
  font-family: 'BMHANNAPro';
  font-size: 20px;
`;

const ModalContinueButton = styled.TouchableOpacity`
  width: 100%;
  padding: 5px 0;
`;

const laterButtonWrapper = css`
  padding-top: 10px;
  padding-bottom: 15px;
  flex: 1;
  border-right-style: solid;
  border-right-color: #888;
  border-right-width: 1px;
`;

const continueButtonWrapper = css`
  padding-top: 10px;
  padding-bottom: 15px;
  flex: 1;
`;

const textWrapper = css`
  align-self: center;
  justify-self: center;
`;

const continueTextStyle = css`
  color: #EF904C;
  font-family: 'BMHANNAPro';
  font-size: 20px;
`;

type ContinueModalProps = {
  content?: string,
  description?: string,
  laterText?: string,
  continueText?: string,
  isVisible: boolean,
  onLaterPress?: () => void,
  onContinuePress?: () => void,
};

const ContinueModal = ({
  content, description, laterText, continueText,
  isVisible, onLaterPress, onContinuePress,
}: ContinueModalProps): JSX.Element => (
  <Modal avoidKeyboard isVisible={isVisible}>
    <ModalView>
      <View>
        <ModalContent>{content}</ModalContent>
        <ModalDescription>{description}</ModalDescription>
      </View>
      <ModalButtonContainer>
        <View style={laterButtonWrapper}>
          <ModalLaterButton onPress={onLaterPress}>
            <View style={textWrapper}>
              <Text style={laterTextStyle}>{laterText}</Text>
            </View>
          </ModalLaterButton>
        </View>
        <View style={continueButtonWrapper}>
          <ModalContinueButton onPress={onContinuePress}>
            <View style={textWrapper}>
              <Text style={continueTextStyle}>{continueText}</Text>
            </View>
          </ModalContinueButton>
        </View>
      </ModalButtonContainer>
    </ModalView>
  </Modal>
);

ContinueModal.defaultProps = {
  content: '나중에 하시겠어요?',
  description: '',
  laterText: '나중에 할래요!',
  continueText: '계속할래요!',
  onLaterPress: () => { },
  onContinuePress: () => { },
};

export default ContinueModal;
