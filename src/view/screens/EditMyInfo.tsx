import React from 'react';
import { useObserver } from 'mobx-react';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import EditMyInfoMainBody from '../components/MyInfo/EditMyInfoMainBody';
import { UserStore } from '../../viewModel';

const EditMyInfo = (): JSX.Element => {
  const { user } = UserStore;
  const userData = {
    userName: user.displayName,
    userEmail: user.email,
  };
  const isLastPage = false;
  return useObserver(() => (
    <>
      <MyInfoHeader userData={userData} isLastPage={isLastPage} />
      <EditMyInfoMainBody edit userData={userData} />
    </>
  ));
};
export default EditMyInfo;
