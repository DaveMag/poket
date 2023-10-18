import React from 'react';
import {View, Text, Pressable} from 'react-native';

import style from './style';
import RegistrationButton from '../RegistrationButton/RegistrationButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';

const ConfirmCorreo = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <FontAwesomeIcon size={60} color={'#a7a5a6'} icon={faEnvelopeOpen} />
      <View style={style.titleContainer}>
        <Text style={style.title}>Confirme su correo</Text>
        <Text style={style.subTitle}>
          Le enviamos un mensaje de confirmación a corre@gmai.com
        </Text>
      </View>
      <RegistrationButton
        onPress={() => navigation.navigate(Routes.Confirmado)}
        title={'Ver mensaje'}
      />
      <Pressable
        onPress={() => navigation.navigate(Routes.EditarCorreo)}
        style={{paddingVertical: 15}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            lineHeight: 30,
            fontWeight: 'bold',
          }}>
          No recibí correo
        </Text>
      </Pressable>
    </View>
  );
};

export default ConfirmCorreo;
