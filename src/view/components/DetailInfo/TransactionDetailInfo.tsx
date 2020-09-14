import React, { useRef } from 'react';
import styled, { css } from '@emotion/native';
import { useObserver } from 'mobx-react';
import Carousel from 'react-native-snap-carousel';
import { Image, TouchableWithoutFeedback } from 'react-native';
import Carrot from '../../../assets/Beezic_Logo_carrot.png';
import Bee from '../../../assets/bee.png';
import Logo from '../../../assets/Beezic_Logo.png';

const DetailInfoForm = styled.View`
  flex-direction: row;
`;

const TransactionDetailInfo = ({ propWidth }): JSX.Element => {
  const carouselData = [
    {
      image: Logo,
    },
    {
      image: Bee,
    },
    {
      image: Carrot,
    },
  ];
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback>
      <Image source={item.image} style={{ width: 360, height: 240 }} />
    </TouchableWithoutFeedback>
  );

  return useObserver(() => (
    <DetailInfoForm>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={propWidth}
        height={300}
        itemWidth={propWidth - 10}
        swipeThreshold={100}
        layoutCardOffset={-12}
        inactiveSlideOpacity={0.4}
        containerCustomStyle={{
          overflow: 'visible',
          marginTop: 40,
          borderWidth: 2,
          borderRadius: 40,
          borderColor: '#c8c8c8',
        }}
        contentContainerCustomStyle={{
          paddingTop: 10,
        }}
      />
    </DetailInfoForm>
  ));
};

export default TransactionDetailInfo;
