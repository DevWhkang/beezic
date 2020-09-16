import React from 'react';
import { useObserver } from 'mobx-react';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader';
import EditMyInfoMainBody from '../components/MyInfo/EditMyInfoMainBody';
import { UserStore } from '../../viewModel';

const EditMyInfo = (): JSX.Element => {
  const isLastPage = false;
  const getUserData = (userName: string, userEmail: string) => ({ userName, userEmail });

  return useObserver(() => (
    <>
      <MyInfoHeader
        userData={getUserData(
          UserStore.user.displayName,
          UserStore.user.email,
        )}
        isLastPage={isLastPage}
      />
      <EditMyInfoMainBody
        edit
        userData={getUserData(
          UserStore.user.displayName,
          UserStore.user.email,
        )}
      />
    </>
  ));
};
export default EditMyInfo;
