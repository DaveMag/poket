import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 20,
  },
  titleContainer: {
    fontFamily: 'Poppins',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 20,
    marginBottom: 20,
		marginTop: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 45,
    textAlign: 'center',
    width: 294,

  },
	subTitle: {
		fontSize: 16, 
		lineHeight: 24, 
		fontWeight:'bold',
		// paddingTop: 10,
	},
});

export default style;