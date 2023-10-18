import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import style from './style';
import BackButton from '../../components/BackButton/BackButton';
import ConfirmMensaje from '../../components/ConfirmMensaje/ConfirmMensaje';
import ConfirmCorreo from '../../components/ConfirmCorreo/ConfirmCorreo';


const ConfirmarCorreo = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.backButtonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ConfirmCorreo />
      {/* <ConfirmMensaje /> */}
    </SafeAreaView>
  );
};

export default ConfirmarCorreo;
