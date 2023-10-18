import React from 'react';

import {View, Animated, useWindowDimensions} from 'react-native';

import style from './style';

const ScrollBar = ({data, scrollX}) => {
	const {width} = useWindowDimensions();
	return (
		<View style={style.container}>
			{data.map((_, index) => {
				const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
				const barWidth = scrollX.interpolate({
					inputRange,
					outputRange: [86, 95, 86],
					extrapolate: 'clamp',
				});

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 0.8, 0.3],
					extrapolate: 'clamp',
				})
				return <Animated.View style={[style.bar, {width: barWidth, opacity}]} key={index.toString()} />
      })}
		</View>
	)
};

export default ScrollBar;