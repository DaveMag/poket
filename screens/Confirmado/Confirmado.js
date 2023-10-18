import React from "react";
import {SafeAreaView, View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import CircleInfo from "../../components/CircleInfo/CircleInfo";
import RegistrationButton from "../../components/RegistrationButton/RegistrationButton";

import style from './style';
import globalStyles from "../../assets/style/globalStyle";
import { Routes } from "../../navigation/Routes";

const Confirmado = ({navigation}) => {
	return (
    <SafeAreaView style={[globalStyles.height, style.container]}>
      <View style={style.bannerContainer}>
        <View style={style.bannerLeft}>
          <FontAwesomeIcon size={18} icon={faCircleCheck} />
          <Text style={style.bannerText}> ¡Confirmado!</Text>
        </View>
        <CircleInfo color={'#000'} />
      </View>
      <View>
        <View style={style.titleContainer}>
          <View style={style.icon}>
            <FontAwesomeIcon size={40} icon={faCheck} />
          </View>
          <Text style={style.titleText}>¡Conozcámonos mejor!</Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 24,
              color: '#4d4d4d',
            }}>
            Necesitamos verificar su identidad, esto nos ayudará a darle más
            seguridad a su cuenta y a sus datos.
          </Text>

          <View style={{paddingHorizontal: 10, marginTop: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 24,
                color: '#4d4d4d',
              }}>
              • Tenga a mano su identificación vigente.
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 24,
                color: '#4d4d4d',
              }}>
              • Le solicitaremos una selfie.
            </Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <RegistrationButton onPress={() => navigation.navigate(Routes.AccessCamera)} title={'Continuar'} />
      </View>
    </SafeAreaView>
  );
};

export default Confirmado;