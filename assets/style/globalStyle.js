import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#fff',
    height: '100%',
    marginBottom: 0,
  },
  backgroundTop: {
    position: 'absolute',
    width: 1050,
    height: 684,
    top: -520,
    left: -583,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
		borderRadius: 1000,
    transform: [
			{skewY: '45deg'},
	],
  },
  flex: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  height: {
    height: '100%',
    marginBottom: 0,
  },
});

export default globalStyles;