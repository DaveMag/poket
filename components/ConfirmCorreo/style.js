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
    textAlign: 'center',
    paddingVertical: 10,
    marginVertical: 20,
    width: 250,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 45,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textUnderButton: {
    fontFamily: 'Poppins',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
});

export default style;
