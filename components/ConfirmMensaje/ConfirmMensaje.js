import React from 'react';
import {View, Text, Pressable} from 'react-native';

import style from './style';
import RegistrationButton from '../RegistrationButton/RegistrationButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentSms} from '@fortawesome/free-solid-svg-icons';
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';


const ConfirmMensaje = () => {
  const navigation = useNavigation();
	return (
    <View style={style.container}>
      <FontAwesomeIcon size={60} color={'#a7a5a6'} icon={faCommentSms} />
      <View style={style.titleContainer}>
        <Text style={style.title}>Le enviamos un mensaje de texto</Text>
        <Text style={style.subTitle}>
          Abra el mensaje que le enviamos al
        </Text>
        <Text style={style.subTitle}>+506 0000 0000</Text>
      </View>
      <RegistrationButton onPress={() => navigation.navigate(Routes.Confirmado)} title={'Ver mensaje'} />
      <Pressable onPress={() => navigation.navigate(Routes.Confirmado)}
      style={{paddingVertical: 15}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            lineHeight: 30,
            fontWeight: 'bold',
          }}>
          Reenviar SMS
        </Text>
      </Pressable>
    </View>
  );
};

export default ConfirmMensaje;