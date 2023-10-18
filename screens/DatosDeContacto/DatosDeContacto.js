import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, LogBox, TextInput} from 'react-native';
// import CheckBox from 'react-native-check-box';
import { NativeBaseProvider, Radio } from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentSms} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';


import BackButton from '../../components/BackButton/BackButton';
import CircleInfo from '../../components/CircleInfo/CircleInfo';

import style from './style';
import globalStyles from '../../assets/style/globalStyle';
import RegistrationButton from '../../components/RegistrationButton/RegistrationButton';
import { Routes } from '../../navigation/Routes';


const DatosDeContacto = ({navigation}) => {
  // const [isChecked, setIsChecked] = useState(false);
	const [email, setEmail] = useState('');
  const [móvil, setMóvil] = useState('');

  const [selectedOption, setSelectedOption] = useState('');
  const [confirmationRoute, setConfirmationRoute] = useState('');

  const handleConfirmation = () => {
    if (selectedOption === 'celular') {
      setConfirmationRoute(navigation.navigate(Routes.ConfirmarMensaje));
    } else if (selectedOption === 'correo') {
      setConfirmationRoute(navigation.navigate(Routes.ConfirmarCorreo));
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ]);
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={[globalStyles.backgroundWhite, style.container]}>
        <View style={style.backButtonContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>

        <View style={style.circleInfo}>
          <CircleInfo />
        </View>

        <View style={style.headerContainer}>
          <Text style={style.header}>Le damos la Bienvenida a Poket</Text>

          <Text style={style.subheader}>
            Para crear su cuenta necesitamos algunos datos que nos ayudarán a
            formalizar nuestra relación y personalizar su experiencia.
          </Text>
        </View>

        <View style={style.inputContainer}>
          <View style={style.labelContainer}>
            <Text style={style.labelHeader}>Correo Electrónico</Text>
            <Text style={style.labelBottom}>
              El que revisa con mayor frecuencia
            </Text>
          </View>
          <View style={style.input}>
            <TextInput
              value={email}
              placeholder="ejemplo@correo.com"
              keyboardType="email-address"
              onChangeText={value => {
                setEmail(value);
                console.log(value);
              }}
            />
          </View>
        </View>
        <View style={style.inputContainer}>
          <View style={style.labelContainer}>
            <Text style={style.labelHeader}>Celular</Text>
            <Text style={style.labelBottom}>
              Con el que chatea y comunica en su día a día
            </Text>
          </View>
          <View style={style.input}>
            <TextInput
              placeholder="506 0000 0000"
              keyboardType="phone-pad"
              value={móvil}
              onChangeText={value => setMóvil(value)}
            />
          </View>
        </View>
        <View style={style.radioHeaderContainer}>
          <Text style={style.radioHeader}>
            Selecciona un canal para verificar sus datos.
          </Text>
        </View>

        <Radio.Group>
          <View style={style.radioGroupContainer}>
            <View>
              <Text name={'celular'} style={style.radioText}>
                Celular
              </Text>
              <View style={style.radioContainer}>
                <Radio
                  name={'celular'}
                  value="celular"
                  // my={1}
                  checked={selectedOption === 'celular'}
                  onPress={() => setSelectedOption('celular')}>
                  {''}
                </Radio>
                <View style={style.smsIcon}>
                  <FontAwesomeIcon
                    size={60}
                    color={'#a7a5a6'}
                    icon={faCommentSms}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text name={'correo'} style={style.radioText}>
                Correo
              </Text>
              <View style={style.radioContainer}>
                <Radio
                  name={'correo'}
                  value="correo"
                  // my={2}
                  checked={selectedOption === 'correo'}
                  onPress={() => setSelectedOption('correo')}>
                  {''}
                </Radio>
                <View style={style.smsIcon}>
                  <FontAwesomeIcon
                    size={60}
                    color={'#a7a5a6'}
                    icon={faEnvelopeOpen}
                  />
                </View>
              </View>
            </View>
          </View>
        </Radio.Group>

        <View style={style.buttonContainer}>
          <RegistrationButton
            onPress={() => handleConfirmation()}
            title={'Siguiente'}
          />
        </View>
      </SafeAreaView>
    </NativeBaseProvider> 
  );
};

export default DatosDeContacto;
