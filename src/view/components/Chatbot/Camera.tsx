import React from 'react';
import ImagePicker from 'react-native-image-picker';
import styled, { css } from '@emotion/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  faCamera, faImages, faCheckSquare, faMinusSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useObserver } from 'mobx-react';
import carrotLogo from '../../../assets/Beezic_Logo_carrot.png';
import ChatBotStore from '../../../viewModel/ChatBotStore';
import { ImageSuccessMessage, transactionTitleMessage } from './BotMessages';

const Container = styled.View`
  
`;

const images = css`
  width: 360px;
  height: 360px;
`;

const body = css`
  background-color: white;
  justify-content: center;
  border-color: black;
`;

const ImageSections = css`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: center;
`;

const btnParentSection = css`
  flex-direction: row;
  align-self: center;
  margin-top: 10;
  margin-bottom: 40;
`;

const iconWrapper = css`
  height: 100;
  width: 100;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 14;
`;

const launchCameraIconArea = css`
  width: 60;
  height: 60;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10;
  justify-content: center;
`;

const iconStyle = css`
  color: #FF8200;
  align-self: center;
`;

const completeButtonStyle = css`
  color: #329632;
  align-self: center;
`;

const btnText = css`
  text-align: center;
  color: gray;
  font-size: 14;
  font-weight: bold;
`;

const titleStyle = css`
  text-align: center;
  font-size: 25;
  margin-top: 30;
  margin-bottom: 10;
  color: #DB631F;
  font-family: 'Jua-Regular';
`;

const itemImageStyle = css`
  width: 350;
  height: 350;
  /* background-color: #fff; */
  border-radius: 10px;
  justify-content: center;
  margin-right: 10px;
`;

const emptyView = css`
  height: 360px;
  width: 360px;
  background-color: #c8c8c8;
  opacity: 0.3;
  align-items: center;
`;

const emptyText = css`
  font-family: 'Jua-Regular';
  font-size: 50px;
  margin-top: 150px;
`;

const imagesList = css`
  height: 360px;
  width: 360px;
`;

const currentImageButtonTouchStyle = css`
  background-color: #FAEBD7;
  border-radius: 20px;
  height: 50px;
  width: 100px;
  margin-top: 10;
  margin-bottom: 30;
  margin-left: 25;
  margin-right: 25;
`;

const ButtonStyle = css`
  align-self: center;
  margin-top: 15;
  font-family: 'Jua-Regular';
  font-size: 20;
  color: #E56D29;
`;

const IsRegisterView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const QuestionRegisterText = styled.Text`
  align-self: center;
  font-family: 'Jua-Regular';
  font-size: 23;
  color: #646464;
`;

const QuestionRegisterTitle = styled.View`
  flex-direction: row;
`;

const CarrotImage = styled.Image`
  margin-bottom: 20px;
`;

const minusTouchStyle = css`
  position: absolute;
  right: 15px;
  top: 5px;
`;

const minusIconStyle = css`
  opacity: 0.7;
  color: white;
`;

const Camera = (): JSX.Element => {
  const launchCamera = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = { uri: response.uri };
        // console.log('response', JSON.stringify(response));
        ChatBotStore.setCurrentImage({
          key: `${ChatBotStore.itemImages.length + 1}`,
          // 너무 무거워서 주석
          // filePath: response,
          // fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  const launchImageLibrary = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else {
        // const source = { uri: response.uri };
        // console.log('response', JSON.stringify(response));
        ChatBotStore.setCurrentImage({
          key: `${ChatBotStore.itemImages.length + 1}`,
          // 너무 무거워서 주석
          // filePath: response,
          // fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };

  const removeImageInList = (key: string) => {
    ChatBotStore.removeItemImage(key);
  };

  const renderFileData = () => {
    if (ChatBotStore.itemImages.length !== 0 && !ChatBotStore.isCurrentImage) {
      return (
        <View style={imagesList}>
          <FlatList
            inverted
            horizontal
            data={ChatBotStore.itemImages}
            renderItem={({ item }) => (
              <View>
                <Image style={itemImageStyle} source={{ uri: item.fileUri }} />
                <TouchableOpacity
                  onPress={() => removeImageInList(item.key)}
                  style={minusTouchStyle}
                >
                  <FontAwesomeIcon size={40} style={minusIconStyle} icon={faMinusSquare} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
    }
    if (ChatBotStore.isCurrentImage) {
      return (
        <>
          <QuestionRegisterTitle>
            <CarrotImage source={carrotLogo} />
            <QuestionRegisterText>선택한 이미지를 등록 하시겠어요?</QuestionRegisterText>
          </QuestionRegisterTitle>

          <Image
            source={{ uri: ChatBotStore.currentImage.fileUri }}
            style={images}
          />
        </>
      );
    }
    return (
      <View style={emptyView}>
        <Text style={emptyText}>사진이 없어요...</Text>
      </View>
    );
  };

  const addItemImages = () => {
    ChatBotStore.setItemImages();
  };

  const removeCurrentImage = () => {
    ChatBotStore.initCurrentImage();
  };

  const closeCameraModal = () => {
    ChatBotStore.setCameraModalVisible();
    ChatBotStore.setMessages(ImageSuccessMessage());
    ChatBotStore.setMessages(transactionTitleMessage());
  };

  return useObserver(() => (
    <Container>
      <View style={body}>
        <Text style={titleStyle}>판매할 물건의 사진 업로드 해주세요.</Text>
        <View style={ImageSections}>
          <View>
            {renderFileData()}
          </View>
        </View>
        {ChatBotStore.isCurrentImage
          ? (
            <IsRegisterView>
              <TouchableOpacity onPress={addItemImages} style={currentImageButtonTouchStyle}>
                <Text style={ButtonStyle}>등록하기</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={removeCurrentImage} style={currentImageButtonTouchStyle}>
                <Text style={ButtonStyle}>취소하기</Text>
              </TouchableOpacity>
            </IsRegisterView>
          )
          : (
            <View style={btnParentSection}>
              <TouchableOpacity onPress={launchCamera} style={iconWrapper}>
                <View style={launchCameraIconArea}>
                  <FontAwesomeIcon icon={faCamera} style={iconStyle} size={35} />
                </View>
                <Text style={btnText}>지금 찍기</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={launchImageLibrary} style={iconWrapper}>
                <View style={launchCameraIconArea}>
                  <FontAwesomeIcon icon={faImages} style={iconStyle} size={40} />
                </View>
                <Text style={btnText}>내 갤러리</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeCameraModal} style={iconWrapper}>
                <View style={launchCameraIconArea}>
                  <FontAwesomeIcon icon={faCheckSquare} style={completeButtonStyle} size={40} />
                </View>
                <Text style={btnText}>다했어요</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    </Container>

  ));
};

export default Camera;
