import React from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { UserStore, ErrorStore } from '../../../viewModel';
import TextInput from '../TextInput';
import Button from '../Button';

type EditUsernamePropTypes = {
  textInputSettings:{
    labelStyle: Record<string, unknown>,
    textInputStyle: Record<string, unknown>,
    viewStyle:Record<string, unknown>,
    background:Record<string, unknown>,
    label: string,
    placeholder:string,
    onPress: () => void
  }
};
const buttonStyle = css`
    margin-top: 30px;
    background: #ff8a3d;
    margin-right:10px;
`;

const FlatButton = styled.View`
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: row;
`;

const EditUsername = ({
  textInputSettings: {
    labelStyle,
    textInputStyle,
    viewStyle,
    label,
    placeholder,
    background,
    onPress,
  },
}: EditUsernamePropTypes): JSX.Element => {
  const navigation = useNavigation();

  const onChangeText = (username: string) => {
    UserStore.username = username;
  };

  const onUpdateButton = async () => {
    await UserStore.updateUsername(UserStore.username);
    if (!ErrorStore.error) navigation.goBack();
  };

  const onCancelButton = (): void => {
    UserStore.username = '';
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
        onPress={onPress}
        onChangeText={onChangeText}
        message={
          (UserStore.compareUsername() && UserStore.username)
            ? '기존 이름과 달라야 해요!'
            : ' '
        }
        regex={/[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/gi}
      />

      <FlatButton>
        <Button
          title="바꾸기"
          background={buttonStyle}
          disabled={!UserStore.username || UserStore.compareUsername()}
          onPress={onUpdateButton}
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
export default EditUsername;
