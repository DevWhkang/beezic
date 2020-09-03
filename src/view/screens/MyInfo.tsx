import React from 'react';
import MyInfoHeader from '../components/MyInfo/MyInfoHeader.tsx';
import MyInfoMainBody from '../components/MyInfo/MyInfoMainBody.tsx';

const MyInfo: React.FunctionComponent<MyInfoProps> = () => {
  const userData = {
    userName: '임진성',
    userEmail: 'realcastlee@gmail.com',
    transactions: [
      { id: 0, title: 'Samsung 29인치 모니터' },
      { id: 1, title: 'LG 무선 청소기' },
      { id: 2, title: '아이패드 2세대' },
      { id: 4, title: '아이패드 4세대' },
      { id: 5, title: '아이패드 5세대' },
      { id: 6, title: '아이패드 6세대' },
      { id: 7, title: '아이패드 7세대' },
      { id: 8, title: '아이패드 8세대' },
      { id: 9, title: '아이패드 9세대' },
      { id: 10, title: '아이패드 10세대' },
      { id: 11, title: '아이패드 11세대' },
      { id: 12, title: '아이패드 12세대' },
      { id: 13, title: '아이패드 13세대' },
      { id: 14, title: '아이패드 14세대' },
      { id: 15, title: '아이패드 15세대' },
    ].slice(0),
  };
  const isLastPage = false;
  return (
    <>
      <MyInfoHeader userData={userData} isLastPage={isLastPage} />
      <MyInfoMainBody userData={userData} />
    </>
  );
};
export default MyInfo;
