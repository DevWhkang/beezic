import React from 'react';
import styled from '@emotion/native';
import CloseMenu from '../components/Main_MenuBar/CloseMenu';
import LinkText from '../components/LinkText';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const MarginBottom = styled.View`
  margin-bottom: 50px;
`;

function MainMenu(): JSX.Element {
  return (
    <>
      <CloseMenu />
      <Container>
        <MarginBottom>
          <LinkText content="Home" size={20} />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="My Page" size={20} />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="Sample 1" size={20} />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="Sample 2" size={20} />
        </MarginBottom>
        <MarginBottom>
          <LinkText content="Sample 3" size={20} />
        </MarginBottom>
      </Container>
    </>
  );
}

export default MainMenu;
