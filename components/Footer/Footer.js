import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

import Button from '../Button/Button';

import style from './style';
import globalStyles from '../../assets/style/globalStyle';


const Footer = () => {
  const navigation = useNavigation();
	return (
    <View style={globalStyles.flex}>
      <Button
        title={'Empezar'}
        onPress={() => {
          navigation.navigate(Routes.Bancos);
        }}
      />
      <Pressable style={style.containerBottom}>
        <Text style={style.text}>Ya tienes una cuenta? </Text>
        <Text style={style.bold}>Iniciar sesión</Text>
      </Pressable>
    </View>
  );
};

export default Footer;