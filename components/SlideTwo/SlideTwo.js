import React from 'react';

import {View, Text, Image, useWindowDimensions} from 'react-native';

import Banner from '../../components/Banner/Banner';

import style from './style';

const SlideTwo = () => {
  const {width} = useWindowDimensions();
	return (
    <View>
      <View style={[style.slidesContainer, {width}]}>
        <View style={style.slideTwo}>
          <Image 
          source={require('../../assets/images/slideTwo.png')}
          resizeMode={'contain'}
          style={style.image}
          />
          {/* <View style={style.header}>
            <Text style={style.headerTop}>Total facturado</Text>
            <Text style={style.headerBottom}>₡298,090.80</Text>
          </View>
          <View style={style.graphContainer}>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡124,967.34</Text>
              <Text style={style.graphDay}>LU</Text>
            </View>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡16,894.28</Text>
              <Text style={style.graphDay}>MA</Text>
            </View>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡61,106.66</Text>
              <Text style={style.graphDay}>MI</Text>
            </View>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡5197.10</Text>
              <Text style={style.graphDay}>JU</Text>
            </View>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡43,161.11</Text>
              <Text style={style.graphDay}>VI</Text>
            </View>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡34,741.37</Text>
              <Text style={style.graphDay}>SA</Text>
            </View>
            <View style={style.singleDay}>
              <Text style={style.graphAmount}>₡12,022.92</Text>
              <Text style={style.graphDay}>DO</Text>
            </View> */}
          {/* </View> */}
        </View>
      </View>
      <View style={style.bannerContainer}>
        <Banner
          title="No dejes que los detalles de tus ventas se te escapen"
          subTitle="Mantén el control total de una sola app"
        />
      </View>
    </View>
  );
};

export default SlideTwo;