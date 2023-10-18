import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  containerMain: {
    alignItems: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 25,
  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    fontFamily: 'Poppins',
    alignItems: 'center',
    marginVertical: 20,
    width: 350,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 45,
    textAlign: 'center',
    paddingTop: 10,
  },
  subTitle: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 20,
    color: '#333',
  },
  bottomTitle: {
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'normal',
    lineHeight: 20.8,
  },
  orderedList: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  number: {
    paddingRight: 3,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    marginVertical: 30,
    bottom: 10,
  },
});

export default style;
