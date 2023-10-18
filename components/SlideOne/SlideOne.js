import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faMobile} from '@fortawesome/free-solid-svg-icons';
import {faWifi} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import Banner from '../../components/Banner/Banner';

import globalStyles from '../../assets/style/globalStyle';
import style from './style';

const SlideOne = () => {
  const {width} = useWindowDimensions();
	return (
    <View>
      <View style={[style.slidesContainer, {width}]}>
        {/* <View style={style.slideOneTop}> */}
        <View style={style.pagoTarjeta}>
          <View style={style.ellipseTop}>
            <FontAwesomeIcon icon={faWifi} rotation={90} size={20} />
          </View>
          <Text style={style.pagoTop}>Pago con tarjeta</Text>
        </View>

        <View style={style.paymentTypesBottom}>
          <View style={style.enlaceType}>
            <View style={style.enlaceIcon}>
              <FontAwesomeIcon icon={faLink} color={'#686868'} size={16.36} />
            </View>
            <Text style={style.enlaceTypeText}>Enlace de pago</Text>
          </View>

          <View style={style.sinpeType}>
            <View style={style.sinpeIcon}>
              <FontAwesomeIcon icon={faMobile} color={'#000'} size={17.74} />
            </View>
            <Text style={style.sinpeTypeText}>Pago con Sinpe</Text>
          </View>
        </View>

        <View style={style.slideOne}>
          <View style={style.paymentsAproved}>
            <View style={style.paymentSlideLeft}>
              <View style={style.paymentTypeIcon}>
                <FontAwesomeIcon icon={faLink} color={'#686868'} size={16.36} />
              </View>
              <View style={style.nameAndTime}>
                <Text style={style.name}>Panini Churrasco</Text>
                <Text style={style.time}>Hace 5 min</Text>
              </View>
            </View>
            <View style={style.amountAndAproved}>
              <Text style={style.amount}>₡13,420</Text>
              <View style={style.aprovedBlock}>
                <FontAwesomeIcon icon={faCheck} size={9} />
                <Text style={style.aproved}>Aprobado</Text>
              </View>
            </View>
          </View>
          <View style={style.paymentsAproved}>
            <View style={style.paymentSlideLeft}>
              <View style={style.paymentTypeIcon}>
                <FontAwesomeIcon icon={faMobile} color={'#000'} size={20} />
              </View>
              <View style={style.paymentIcons}>
                <View style={style.nameAndTime}>
                  <Text style={style.name}>Sandwich de Pavo</Text>
                  <Text style={style.time}>Hace 30 min</Text>
                </View>
              </View>
            </View>
            <View style={style.amountAndAproved}>
              <Text style={style.amount}>₡10,736</Text>
              <View style={style.aprovedBlock}>
                <FontAwesomeIcon icon={faCheck} size={9} />
                <Text style={style.aproved}>Aprobado</Text>
              </View>
            </View>
          </View>
          <View style={style.paymentsAproved}>
            <View style={style.paymentSlideLeft}>
              <View style={style.paymentTypeIcon}>
                <FontAwesomeIcon icon={faWifi} rotation={90} />
              </View>
              <View style={style.nameAndTime}>
                <Text style={style.name}>Capuccino frío</Text>
                <Text style={style.time}>Ayer 4:45 pm</Text>
              </View>
            </View>
            <View style={style.amountAndAproved}>
              <Text style={style.amount}>₡3,175</Text>
              <View style={style.aprovedBlock}>
                <FontAwesomeIcon icon={faCheck} size={9} />
                <Text style={style.aproved}>Aprobado</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.bannerContainer}>
        <Banner
          title="Transforma tu celular en una poderosa terminal de pago"
          subTitle="Mantén el control total de una sola app"
        />
      </View>
    </View>
  );
};

export default SlideOne;