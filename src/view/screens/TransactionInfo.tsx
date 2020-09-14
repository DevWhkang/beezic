// App.js
import React, { useEffect, useCallback } from 'react';
import {
  View,
  // TouchableWithoutFeedback,
  // Keyboard,
  // TouchableOpacity,
  // Button, Text, Modal,
  // TouchableHighlight,
  TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { useObserver } from 'mobx-react';
import { css } from '@emotion/native';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import ChatBotStore from '../../viewModel/ChatBotStore';
import dialogflowConfig from '../../../dialogflowENV';
import {
  initMessages, dialogflowMessage, ConfirmMessage, ConfirmAliasMessage,
} from '../components/Chatbot/BotMessages';
import BubbleRender from '../components/Chatbot/BubbleRender';
import AddressSearchModal from '../components/Chatbot/AddressSearchModal';
import Finish from '../components/Chatbot/Finish';
import UploadImageModal from '../components/Chatbot/UploadImageModal';
import InputAlias from '../components/Chatbot/InputAlias';

const chatbotStyles = css`
  flex: 1;
  background-color: #FFEFD5;
`;

const sendStyle = css`
  color: #EF904C;
  margin-right: 5px;
  margin-bottom: 4px;
`;

const TransactionInfo = (): JSX.Element => {
  // 초기세팅
  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_KOREAN,
      dialogflowConfig.project_id,
    );
    if (ChatBotStore.messages.length === 0) {
      ChatBotStore.setMessages(initMessages);
    }
  }, []);

  const sendBotResponse = (text: string) => {
    ChatBotStore.setMessages(dialogflowMessage(text));
  };

  const handleGoogleResponse = (result) => {
    const text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
  };

  const onSend = (sendMessages) => {
    ChatBotStore.setMessages(sendMessages);

    const message = sendMessages[0].text;
    Dialogflow_V2.requestQuery(
      message,
      (result) => handleGoogleResponse(result),
      (error) => console.log('error:', error),
    );
  };

  const renderBubble = (props) => {
    const { currentMessage } = props;

    if (currentMessage._id === ChatBotStore.messages.length) {
      if (currentMessage.text.includes('직거래 장소를 알려주세요')) {
        return (
          <View>
            <BubbleRender {...props} />
            <AddressSearchModal buttonTextType="직거래 장소" subTextType="직거래 장소" />
          </View>
        );
      }
      if (currentMessage.text.includes('직거래 장소를 다시 선택')) {
        return (
          <View>
            <BubbleRender {...props} />
            <AddressSearchModal buttonTextType="다시" subTextType="직거래 장소" />
          </View>
        );
      }
      if (currentMessage.text.includes('픽업지는 어디인가요')) {
        return (
          <View>
            <BubbleRender {...props} />
            <AddressSearchModal buttonTextType="픽업지" subTextType="픽업지" />
          </View>
        );
      }
      if (currentMessage.text.includes('픽업지 장소를 다시 선택')) {
        return (
          <View>
            <BubbleRender {...props} />
            <AddressSearchModal buttonTextType="다시" subTextType="픽업지" />
          </View>
        );
      }
      if (currentMessage.text.includes('사진을 업로드')) {
        return (
          <View>
            <BubbleRender {...props} />
            <UploadImageModal buttonTextType="사진 업로드 하기" subTextType="업로드" />
          </View>
        );
      }
      if (currentMessage.text.includes('직거래의 별명')) {
        if (currentMessage.text.includes('입수')) {
          return (
            <View>
              <BubbleRender {...props} />
              <Finish />
            </View>
          );
        }
        return (
          <View>
            <BubbleRender {...props} />
            {ChatBotStore.confirmAlias === ''
            && <InputAlias />}
          </View>
        );
      }
    }
    return <BubbleRender {...props} />;
  };

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <FontAwesomeIcon icon={faArrowCircleUp} style={sendStyle} size={37} />
      </View>
    </Send>
  );

  return useObserver(() => (
    <View style={chatbotStyles}>
      <GiftedChat
        renderBubble={renderBubble}
        messages={ChatBotStore.messages.slice()} // FlatList로의 props는 불변성을 지켜야한다.
        onSend={(sendMessages) => onSend(sendMessages)}
        // showUserAvatar
        user={{ // 로그인 유저
          _id: 1,
        }}
        alwaysShowSend
        placeholder="  Beezic Bot에게 말해주세요."
        renderSend={renderSend}
      />
    </View>
  ));
};

export default TransactionInfo;
