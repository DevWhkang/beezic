import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import MyInfoMainBody from '../components/MyInfo/MyInfoMainBody';
import { UserStore, DetailInfoStore } from '../../viewModel';

const MyInfo = (): JSX.Element => {
  const { user } = UserStore;
  const userData: {
    userName: Record<string, string>,
    userEmail: Record<string, string>,
  } = {
    userName: user.displayName,
    userEmail: user.email,
  };
  const isLastPage = false;
  return useObserver(() => (
    <>
      <MyInfoHeader userData={userData} isLastPage={isLastPage} />
      <MyInfoMainBody userData={userData} />
    </>
  ));
};
export default MyInfo;
