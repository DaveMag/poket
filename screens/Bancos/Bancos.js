import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Pressable, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {Routes} from '../../navigation/Routes';

import BackButton from '../../components/BackButton/BackButton';

import style from './style';
import globalStyles from '../../assets/style/globalStyle';

const Bancos = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedCedula, setSelectedCedula] = useState('');

  return (

      <SafeAreaView style={[globalStyles.backgroundWhite, style.container]}>
        <View style={style.backButtonContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>

        <Text style={style.header}>¿En qué banco quiere abrir Poket?</Text>

        <View style={style.inputContainer}>
          <Text style={style.label}>Seleccionar banco</Text>
          <View style={style.input}>
          <Picker
              
              keyboardType="default"
              selectedValue={selectedValue}
              onValueChange={(itemValue) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item
                label="Banco LAFISE Costa Rica"
                value="Banco LAFISE Costa Rica"
              />
              <Picker.Item
                label="Banco LAFISE Nicaragua"
                value="Banco LAFISE Nicaragua"
              />
            </Picker>
          </View>
        </View>
        <View style={style.inputContainer}>
          <Text style={style.label}>Tipo de identificación</Text>
          <View style={style.input}>
            <Picker
              placeholder={'Cédula persona fisica'}
              keyboardType="default"
              selectedValue={selectedCedula}
              onValueChange={itemIndex => setSelectedCedula(itemIndex)}>
              <Picker.Item label="DNI" value="DNI" />
              <Picker.Item label="Pasaporte" value="Pasaporte" />
            </Picker>
          </View>
        </View>
        <View style={style.inputContainerNumeroIdentidad}>
          <Text style={style.labelNumeroIdentidad}>
            Número de documento de identidad
          </Text>
          <View style={style.input}>
            <TextInput placeholder="0 -0000 -0000" keyboardType="default" />
          </View>
          <Text style={style.formato}>Formato válido: X-XXXX-XXXX</Text>
        </View>
        <View style={style.buttonContainer}>
          <Pressable
            onPress={() => navigation.navigate(Routes.DatosDeContacto)}
            style={style.button}>
            <Text style={style.placeholder}>Siguiente &#10132;</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  );
};

export default Bancos;