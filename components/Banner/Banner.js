import React, {useState, useEffect} from 'react';
import {Text, View, Animated} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

// LAST SHOT ON THE FADING
class BannerLoader extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.View
      onLoad={this.onLoad}
      {...this.props}
      style={[
        {
          opacity: this.state.opacity,
          transform: [
            {
              scale: this.state.opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              }),
            },
          ],
        },
        this.props.style,
      ]}
      />
    )
  }
}

const Banner = props => {
  const opacity = new Animated.Value(0);

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };



  useEffect(() => {
    onLoad();
  }, []);

  return (
    // <BannerLoader style={style.banner}>
    <Animated.View onScroll={onLoad()}>
      <Text style={style.title}>{props.title}</Text>
      <Text style={style.midLine}>{props.midLine}</Text>
      <Text style={style.subTitle}>{props.subTitle}</Text>
    </Animated.View>
  );
};

Banner.propTypes = {
	title: PropTypes.string,
  midLine: PropTypes.string,
	subTitle: PropTypes.string,
  onScroll: PropTypes.func,
}

export default Banner;
