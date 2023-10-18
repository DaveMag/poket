import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import style from './style';

const BackButton = props => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        // props.onPress();
        navigation.goBack();
      }}
      style={style.container}>
      <FontAwesomeIcon
      size={20}
			icon={faChevronLeft} 
			style={style.arrow} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

export default BackButton;
