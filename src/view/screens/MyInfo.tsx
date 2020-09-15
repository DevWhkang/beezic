import React from 'react';
import { useObserver } from 'mobx-react';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import MyInfoMainBody from '../components/MyInfo/MyInfoMainBody';
import { UserStore, DetailInfoStore } from '../../viewModel';

const MyInfo = (): JSX.Element => useObserver(() => {
  const { user } = UserStore;
  const userData: {
    userName: Record<string, string>,
    userEmail: Record<string, string>,
    transactions: { id: number, title: string }[],
  } = {
    userName: user.displayName,
    userEmail: user.email,
    transactions: [],
  };
  console.log(DetailInfoStore.userTransactionList);
  const isLastPage = false;
  return (
    <>
      <MyInfoHeader userData={userData} isLastPage={isLastPage} />
      <MyInfoMainBody userData={userData} />
    </>
  );
});
export default MyInfo;
