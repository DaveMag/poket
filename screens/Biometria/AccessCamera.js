import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import Popup, {showPopup} from '../../components/Popup/Popup';
import BackButton from '../../components/BackButton/BackButton';

import style from './style';

const AccessCamera = () => {

	// let popupRef = useRef();

	const onLoadPopup = () => {
		showPopup();
	}

	const onClosePopup = () => {
		close();
	}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // paddingBottom: 20,
        }}>
        <View style={{position: 'absolute', top: 20, left: 20}}>
          <BackButton />
        </View>
        <Text style={style.title} onPress={onLoadPopup}>
          Poket require acceso a tu cámara
        </Text>
        <Text style={style.subTitle}>
          Permitir que Poket acceda a la cámara de su celular
        </Text>
        <Popup
          title="Acceso a la cámara"
          body="Poket requiere acceso a su cámara para poder verificar su identidad"
          // ref={target => target}
          onTouchOutside={onClosePopup}
          onLoad={onLoadPopup}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccessCamera;
