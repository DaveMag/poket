import React from 'react';

import {View, Text, useWindowDimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStore} from '@fortawesome/free-solid-svg-icons';

import Banner from '../../components/Banner/Banner';

import style from './style';


const SlideThree = () => {
  const {width} = useWindowDimensions();
  
  return (
    <View>
      <View style={[style.slidesContainer, {width}]}>
        <View style={style.slideThree}>
          <Text style={style.slideThreeHeader}>
            Aumenta tu limites de facturación
          </Text>
          <View style={style.ellipseContainer}>
            <View style={style.ellipsesLeft}>
              <FontAwesomeIcon icon={faStore} size={18} color={'#4d4d4d'} />
            </View>
            <View style={style.border}></View>
            <View style={style.dot}></View>
            <View style={style.border}></View>
            <View style={style.ellipsesRight}></View>
          </View>
          <View style={style.pasosOneToThree}>
            <Text style={style.text}>Paso 1</Text>
            <Text style={style.text}>Paso 3</Text>
          </View>
          <View style={style.slideThreeSubContainer}>
            <View style={style.slideThreeLeft}>
              <Text style={style.pasos}>Paso 1</Text>
              <Text style={style.stepsType}>Realiza tu primer cobro</Text>
            </View>
            <View style={style.slideThreeRight}>
              <Text style={style.factura}>Factura hasta</Text>
              <Text style={style.amount}>₡150,000</Text>
            </View>
          </View>
          <View style={style.slideThreeSubContainer}>
            <View style={style.slideThreeLeft}>
              <Text style={style.pasos}>Paso 2</Text>
              <Text style={style.stepsType}>Verificate en hacienda</Text>
            </View>
            <View style={style.slideThreeRight}>
              <Text style={style.factura}>Factura hasta</Text>
              <Text style={style.amount}>₡300,000</Text>
            </View>
          </View>
          <View style={style.slideThreeSubContainer}>
            <View style={style.slideThreeLeft}>
              <Text style={style.pasos}>Paso 3</Text>
              <Text style={style.stepsType}>Firma contracto</Text>
            </View>
            <View style={style.slideThreeRight}>
              <Text style={style.factura}>Factura hasta</Text>
              <Text style={style.amount}>Ilimitada</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.bannerContainer}>
        <Banner
          title="Tu negocio creciendo al máximo"
          subTitle="Alcanza el nivel de facturación ilimitado"
        />
      </View>
    </View>
  );
};

export default SlideThree;
