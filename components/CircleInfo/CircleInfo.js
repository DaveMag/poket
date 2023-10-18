import React from 'react';
import {Text, Pressable} from 'react-native';

import style from './style';

const CircleInfo = () => {
	return (
    <Pressable style={style.circle}>
      <Text style={style.info}>i</Text>
    </Pressable>
  );
}


export default CircleInfo;