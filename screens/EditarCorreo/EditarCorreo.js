import React from 'react';
import {View, Text, Pressable, SafeAreaView} from 'react-native';

import style from './style';
import BackButton from '../../components/BackButton/BackButton';
import RegistrationButton from '../../components/RegistrationButton/RegistrationButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { Routes } from '../../navigation/Routes';

const EditarCorreo = ({navigation}) => {
  return (
    <SafeAreaView style={style.containerMain}>
      <View style={style.backButtonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <FontAwesomeIcon size={60} color={'#a7a5a6'} icon={faEnvelopeOpen} />

          <Text style={style.title}>No se preocupe, le ayudamos</Text>
        </View>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: 350,
          }}>
          <Text style={style.subTitle}>Asegúrese de revisar lo siguiente:</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.number}>1.</Text>
            <Text style={style.orderedList}>
              Confirme si su correo correo@gmail.com está bien escrito.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.number}>2.</Text>
            <Text style={style.orderedList}>Revise su bandeja de spam.</Text>
          </View>
          <Text style={[style.subTitle, style.bottomTitle]}>
            Si ambas opciones están bien, puede hacer clic en enviar correo.
          </Text>
        </View>
        <View style={style.buttonContainer}>
          <RegistrationButton onPress={() => navigation.navigate(Routes.DatosDeContacto)} title={'Editar correo'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditarCorreo;
