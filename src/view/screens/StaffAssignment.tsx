import React, { useEffect } from 'react';
import {
  Alert, Animated, BackHandler, Easing,
} from 'react-native';
import styled, { css } from '@emotion/native';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useObserver } from 'mobx-react';
import { ChatbotModel, AssignmentModel } from 'src/model';
import { ChatBotStore, AssignmentStore } from '../../viewModel';
import logo from '../../assets/Beezic_Logo_carrot.png'; // TODO svg 파일로 변경
import LinkText from '../components/LinkText';
import CompleteAssignment from '../components/Chatbot/CompleteAssignment';

const Container = styled.View`
  font-family: 'BMYEONSUNG';
`;

const Logo = styled.Image`
  align-self: center;
  width: 80px;
  height: 80px;
  margin: 143px;
  margin-bottom: 0px;
`;

const Header = styled.Text`
  align-self: center;
  font-size: 24px;
  margin: 27px;
  font-family: 'BMHANNAPro';
`;

const Body = styled.View`
  align-self: center;
  margin-top: 114px;
  margin-bottom: 27px;
`;

const BodyText = styled.Text`
  align-self: center;
  font-size: 20px;
  font-family: 'BMHANNA_11yrs';
`;

const iconStyle = css`
  align-self: center;
`;

const spinValue = new Animated.Value(0);
const scaleValue = new Animated.Value(1);
const rotate = spinValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
const scale = scaleValue.interpolate({ inputRange: [1, 2], outputRange: [1, 2] });

const pulse = () => {
  scaleValue.setValue(1);
  Animated.timing(scaleValue, {
    toValue: 2, duration: 800, easing: Easing.linear, useNativeDriver: true,
  }).start(() => {
    Animated.timing(scaleValue, {
      toValue: 1, duration: 400, easing: Easing.linear, useNativeDriver: true,
    }).start(pulse);
  });
};
const spin = () => {
  spinValue.setValue(0);
  Animated.timing(spinValue, {
    toValue: 1, duration: 1000, easing: Easing.linear, useNativeDriver: true,
  }).start(spin);
};

const StaffAssignment = (): JSX.Element => {
  const navigation = useNavigation();

  setTimeout(() => {
    AssignmentStore.toggleIsTimer();
  }, 5000);

  useEffect(() => {
    if (ChatBotStore.isSetReservation && AssignmentStore.isGetStaffList) {
      AssignmentStore.assignmentStaff();
    }
  }, [ChatBotStore.isSetReservation, AssignmentStore.isGetStaffList]);

  useFocusEffect(() => {
    spin();
    pulse();
    const onBackPress = async () => {
      const result = new Promise(() => (
        Alert.alert('경고', ' 배정 취소 하시면 담당 직원 배정 없이 중고 직거래가 예약 됩니다. 배정이 안된 직거래는 비직에서 검토 후 연락드립니다.', [
          {
            text: '배정 취소',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Main' }],
              });
              return true;
            },
          }, {
            text: '계속하기',
            onPress: () => true,
          },
        ])))
        .then((e) => e);
      return result;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  return useObserver(() => (
    <>
      {AssignmentStore.isUpdateBoth && AssignmentStore.isTimer
        ? <CompleteAssignment />
        : (
          <Container>
            {ChatBotStore.isSetReservation}
            {AssignmentStore.isGetStaffList}
            <Logo source={logo} />
            <Header>담당 거래 직원을 배정 중입니다.</Header>
            <Animated.View style={{ transform: [{ rotate }, { scale }] }}>
              <FontAwesomeIcon
                icon={faCarrot}
                style={iconStyle}
                color="#fc8a3d"
              />
            </Animated.View>

            <Body>
              <BodyText>배정이 완료되면</BodyText>
              <BodyText>체크리스트를 작성해주세요.</BodyText>
            </Body>
            <LinkText content="Finish" />
          </Container>
        )}
    </>
  ));
};

export default StaffAssignment;
