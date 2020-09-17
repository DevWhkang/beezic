import React from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../TextInput';
import Button from '../Button';
import { UserStore, ErrorStore } from '../../../viewModel';

type EditPasswordPropTypes = {
  textInputSettings:{
    labelStyle: Record<string, unknown>,
    textInputStyle: Record<string, unknown>,
    viewStyle:Record<string, unknown>,
    background:Record<string, unknown>,
    label: string,
    placeholder:string,
  }
};
const buttonStyle = css`
  background: #ff8a3d;
  margin-right:10px;
`;
const FlatButton = styled.View`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const MarginBottom = styled.View`
  margin-bottom: 30px;
`;

const EditPassword = ({
  textInputSettings: {
    labelStyle,
    textInputStyle,
    viewStyle,
    label,
    placeholder,
    background,
  },
}: EditPasswordPropTypes):JSX.Element => {
  const navigation = useNavigation();

  const onChangeText = (password: string) => {
    UserStore.password = password;
  };

  const onCheckChangeText = (passwordCheck: string) => {
    UserStore.passwordCheck = passwordCheck;
  };

  const onChangeButton = async () => {
    await UserStore.updatePassword(UserStore.password);
    if (!ErrorStore.error) navigation.goBack();
  };

  const onCancelButton = () => {
    navigation.goBack();
  };

  return useObserver(() => (
    <>
      <MarginBottom>
        <TextInput
          password
          labelStyle={labelStyle}
          textInputStyle={textInputStyle}
          viewStyle={viewStyle}
          label={label}
          placeholder={placeholder}
          background={background}
          onChangeText={onChangeText}
        />
      </MarginBottom>
      <MarginBottom>
        <TextInput
          password
          labelStyle={labelStyle}
          textInputStyle={textInputStyle}
          viewStyle={viewStyle}
          label={`${label} 확인`}
          placeholder={placeholder}
          background={background}
          onChangeText={onCheckChangeText}
          message={(
            !UserStore.isEmptyPassword()
            && (UserStore.checkPassword()
              ? '제대로 작성하셨네요!'
              : '음... 다시 한 번 작성해보실래요?'
            )
          )}
        />
      </MarginBottom>
      <FlatButton>
        <Button
          title="바꾸기"
          background={buttonStyle}
          onPress={onChangeButton}
          disabled={
            UserStore.isEmptyPassword()
            || !UserStore.checkPassword()
          }
        />
        <Button
          title="취소하기"
          background={buttonStyle}
          onPress={onCancelButton}
        />
      </FlatButton>
    </>
  ));
};
export default EditPassword;
