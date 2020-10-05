// App.js
import React, { useEffect } from 'react';
import {
  GiftedChat, Send, InputToolbar,
} from 'react-native-gifted-chat';
import {
  BackHandler, View, Text,
} from 'react-native';
import { useObserver } from 'mobx-react';
import { css } from '@emotion/native';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ChatBotStore, UserStore } from '../../viewModel';
import dialogflowConfig from '../../../dialogflowENV';
import {
  initMessages, dialogflowMessage,
} from '../components/Chatbot/BotMessages';
import BubbleRender from '../components/Chatbot/BubbleRender';
import AddressSearchModal from '../components/Chatbot/AddressSearchModal';
import Finish from '../components/Chatbot/Finish';
import UploadImageModal from '../components/Chatbot/UploadImageModal';
import InputAlias from '../components/Chatbot/InputAlias';
import ContinueModal from '../components/ContinueModal';

const chatbotStyles = css`
  flex: 1;
  background-color: #FFEFD5;
`;

const sendStyle = css`
  color: #EF904C;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const inputDownStyle = css`
  align-self: center;
`;

const inputDownText = css`
  font-family: 'Jua-Regular';
  font-size: 15;
  color: #000;
  opacity: 0.4;
  margin-top: 10;
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
      ChatBotStore.setMessages(initMessages(UserStore.user.displayName));
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
    return (
      <BubbleRender
        {...props}
        messages={ChatBotStore.messages}
      />
    );
  };

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <FontAwesomeIcon icon={faArrowCircleUp} style={sendStyle} size={37} />
      </View>
    </Send>
  );

  const renderInputToolbar = (props) => {
    const { messages } = props;
    const { text, user } = messages[0];

    if (user._id === 1) {
      if (text.includes('직거래 장소를 알려주세요')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>입력 창은 직거래 장소를 알려주시면 돌려 드릴게요.</Text>
          </View>
        );
      }
      if (text.includes('직거래 장소를 다시 선택')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>입력 창은 직거래 장소를 다시 알려주시면 돌려 드릴게요.</Text>
          </View>
        );
      }
      if (text.includes('픽업지는 어디인가요?')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>입력 창은 픽업 장소를 알려주시면 돌려 드릴게요.</Text>
          </View>
        );
      }
      if (text.includes('픽업지 장소를 다시 선택')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>입력 창은 픽업 장소를 다시 알려주시면 돌려 드릴게요.</Text>
          </View>
        );
      }
      if (text.includes('사진을 업로드')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>입력 창은 사진을 업로드 해주시면 돌려 드릴게요.</Text>
          </View>
        );
      }
      if (text.includes('중고 직거래의 별명')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>해당 직거래를 한눈에 알아볼 수 있도록 별명을 지어주세요.</Text>
          </View>
        );
      }
      if (text.includes('비직 직원이 배정됩니다')) {
        return (
          <View style={inputDownStyle}>
            <Text style={inputDownText}>Finish 버튼을 누르면 담당 직원을 배정해 드릴게요.</Text>
          </View>
        );
      }
    }
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#fff',
          borderRadius: 60,
          paddingLeft: 5,
        }}
      />
    );
  };
  const renderTime = () => {
    // 이렇게 해야... 메시지에서 시간 없어짐...;;
  };
  const navigation = useNavigation();
  useFocusEffect(() => {
    const onBackPress = () => {
      ChatBotStore.toggleModal();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  });

  const onLaterHandler = () => {
    ChatBotStore.toggleModal();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  const onContinueHandler = () => {
    ChatBotStore.toggleModal();
  };

  return useObserver(() => (
    <View style={chatbotStyles}>
      <ContinueModal
        isVisible={ChatBotStore.isModalShown}
        onLaterPress={onLaterHandler}
        onContinuePress={onContinueHandler}
      />
      <GiftedChat
        renderBubble={renderBubble}
        messages={ChatBotStore.messages.slice()}
        onSend={(sendMessages) => onSend(sendMessages)}
        user={{
          _id: UserStore.user.uid,
          name: UserStore.user.displayName,
        }}
        alwaysShowSend
        placeholder=" Beezic Bot에게 말해주세요."
        renderSend={renderSend}
        textInputProps={{
          autoCorrect: false,
          style: {
            fontSize: 16,
            fontFamily: 'Jua-Regular',
            color: '#8c8c8c',
            width: '85%',
            marginLeft: 10,
          },
        }}
        renderInputToolbar={(props) => renderInputToolbar(props)}
        renderTime={renderTime}
      />
    </View>
  ));
};

export default TransactionInfo;
