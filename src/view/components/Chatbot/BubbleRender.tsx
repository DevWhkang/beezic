import React from 'react';
import { Bubble } from 'react-native-gifted-chat';

const textStlye = {
  right: {
    color: '#DB631F',
    fontFamily: 'Jua-Regular',
    fontSize: 18,
  },
  left: {
    color: 'white',
    fontFamily: 'Jua-Regular',
    fontSize: 18,
  },
};

const wrapperStyle = {
  right: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 10,
  },
  left: {
    backgroundColor: '#EF8B47',
    padding: 5,
    marginBottom: 10,
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
