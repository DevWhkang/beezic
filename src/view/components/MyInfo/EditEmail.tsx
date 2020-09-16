import React from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../TextInput';
import Button from '../Button';
import { UserStore, ErrorStore } from '../../../viewModel';

type EditEmailPropTypes = {
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
  margin-top: 30px;
  margin-right:10px;
  background: #ff8a3d;
`;

const FlatButton = styled.View`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const EditEmail = ({
  textInputSettings: {
    labelStyle,
    textInputStyle,
    viewStyle,
    label,
    placeholder,
    background,
  },
}: EditEmailPropTypes):JSX.Element => {
  const navigation = useNavigation();
  const onChangeText = (email: string) => {
    UserStore.email = email;
  };

  const onChangeButton = async () => {
    await UserStore.updateEmail(UserStore.email);
    if (!ErrorStore.error) navigation.goBack();
  };

  const onCancelButton = () => {
    UserStore.email = '';
    navigation.goBack();
  };

  return useObserver(() => (
    <>
      <TextInput
        labelStyle={labelStyle}
        textInputStyle={textInputStyle}
        viewStyle={viewStyle}
        label={label}
        placeholder={placeholder}
        background={background}
        onChangeText={onChangeText}
        message={ErrorStore.message('email', '이메일 형식이 아니에요!')}
      />
      <FlatButton>
        <Button
          title="바꾸기"
          background={buttonStyle}
          onPress={onChangeButton}
          disabled={!UserStore.email.match(/^\w+\.?\w+@\w+\.\w+\.?\w+$/g)}
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
export default EditEmail;
