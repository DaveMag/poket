import React from 'react';

import {View, Image, useWindowDimensions} from 'react-native';

import Banner from '../../components/Banner/Banner';

import style from './style';
const SlideFour = () => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <View style={[style.slidesContainer, {width}]}>
        <Image
        source={require('../../assets/images/slideFour.png')} 
        style={[style.image, {width, resizeMode:'contain'}]}
        />
      </View>
      <View style={style.bannerContainer}>
        <Banner
          title="Una cuenta incluida"
          midLine="Recibe tus cobros y envía dinera desde"
          subTitle="una sola cuenta"
        />
      </View>
    </View>
  );
};

export default SlideFour;
