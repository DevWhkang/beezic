import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import MyInfoMainBody from '../components/MyInfo/MyInfoMainBody';
import { UserStore, DetailInfoStore } from '../../viewModel';

const MyInfo = (): JSX.Element => {
  const isLastPage = false;
  return useObserver(() => (
    <>
      <MyInfoHeader isLastPage={isLastPage} />
      <MyInfoMainBody />
    </>
  ));
};
export default MyInfo;
