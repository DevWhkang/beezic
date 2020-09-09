import React from 'react';
import { Bubble } from 'react-native-gifted-chat';

const textStlye = {
  right: {
    color: '#DB631F',
  },
  left: {
    color: 'white',
  },
};

const wrapperStyle = {
  right: {
    backgroundColor: 'white',
  },
  left: {
    backgroundColor: '#F4A460',
  },
};

const BubbleRender = ({ ...props }): JSX.Element => (
  <Bubble
    {...props}
    textStyle={textStlye}
    wrapperStyle={wrapperStyle}
  />
);

export default BubbleRender;
