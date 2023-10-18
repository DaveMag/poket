import React, {useState, useEffect} from 'react';
import {Modal, Animated, View, Text, TouchableOpacity} from 'react-native';
import {Routes} from '../../navigation/Routes';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const PopupConfirmAccess = props => {
  const {title, body} = props;
  const [show, setShow] = useState(true);
  const opacity = new Animated.Value(0);
  const navigation = useNavigation();

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const showPopup = () => {
    props.show;
  };

  const close = () => {
    setShow(false);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const renderTitle = () => {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          textAlign: 'center',
        }}>
        <FontAwesomeIcon icon={faCamera} />
        <Text
          style={{
            color: '#000000',
            fontSize: 20,
            lineHeight: 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {title}
        </Text>
        <Text>{body}</Text>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <TouchableOpacity>
          <Text>Mientras la app está en uso</Text>
        </TouchableOpacity>
        <Text>
          Solo esta vez
        </Text>
        <TouchableOpacity>
          <Text>No Permitir</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={show}
      onRequestClose={close}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: '90%',
            borderRadius: 8,
            paddingHorizontal: 10,
            height: 250,
            marginBottom: 20,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={close}>
            <Text
              style={{
                textAlign: 'right',
                top: 0,
                marginRight: 20,
                fontSize: 20,
              }}>
              X
            </Text>
          </TouchableOpacity>
          {renderTitle()}
          {renderContent()}
        </View>
      </View>
    </Modal>
  );
};

PopupConfirmAccess.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PopupConfirmAccess;
