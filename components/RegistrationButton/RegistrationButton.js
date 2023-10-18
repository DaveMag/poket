import React from 'react';
import {Text, Pressable} from 'react-native';

import PropTypes from 'prop-types';

import style from './style';	

const RegistrationButton = props => {
	return (
    <Pressable style={style.button} onPress={() => props.onPress()}>
      <Text style={style.placeholder}>{props.title} &#10132;</Text>
    </Pressable>
  );
};

RegistrationButton.default = {
  onPress: () => {},
};

RegistrationButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default RegistrationButton;	