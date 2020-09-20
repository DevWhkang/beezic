import React from 'react';
import { useObserver } from 'mobx-react';
import MyInfoNewHeader from '../components/MyInfo/MyInfoNewHeader';
import MyInfoMainBody from '../components/MyInfo/MyInfoMainBody';

const MyInfo = (): JSX.Element => {
  const isLastPage = false;
  return useObserver(() => (
    <>
      <MyInfoNewHeader isLastPage={isLastPage} />
      <MyInfoMainBody />
    </>
  ));
};
export default MyInfo;
