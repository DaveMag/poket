import React from 'react';

import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Button = props => {
  return (
    <Pressable style={style.button}>
      <Text
      style={style.title} 
      onPress={() => props.onPress()}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Button.default = {
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
