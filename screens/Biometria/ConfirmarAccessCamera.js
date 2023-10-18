import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import PopupConfirmAccess from '../../components/Popup/PopupConfirmAccess';
import BackButton from '../../components/BackButton/BackButton';

import style from './style';

const ConfirmAccessCamera = () => {
  // let popupRef = React.createRef();

  // const onLoadPopup = () => {
  //   popupRef.show();
  // };

  // const onClosePopup = () => {
  //   popupRef.close();
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{position: 'absolute', top: 20, left: 20}}>
        <BackButton />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // paddingBottom: 20,
        }}>
        <Text style={style.title}>
          Su dispositivos require acceso a su cámara
        </Text>
        <Text style={style.subTitle}>
          Permitir que Poket acceda a la cámara de su celular
        </Text>
        <PopupConfirmAccess
          title="¿Permitir que su teléfono tome fotos y grabe videos?"
          
          // ref={target => (popupRef = target)}
          // onTouchOutside={onClosePopup}
          // onLoad={onLoadPopup}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmAccessCamera;
