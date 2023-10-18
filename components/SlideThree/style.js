import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    marginTop: 12,
    // width: '100%',
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  slidesContainer: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
    // marginLeft: 0,
  },
  slideThree: {
    height: 287.09,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 13.09,
    // padding: '43, 9.82, 43, 9.82',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    marginTop: 70,
  },
  slideThreeHeader: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
		marginTop: 10,
  },
  headerTop: {
    height: 19,
    fontWeight: 'normal',
    fontSize: 12.44,
    lineHeight: 18.65,
    textAlign: 'center',
    color: '#4f4f4f',
  },
  headerBottom: {
    fontSize: 35.53,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  singleDay: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideThreeSubContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  amount: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 13.09,
    lineHeight: 17.83,
    color: '#2f2f2f',
  },
  slideThreeRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  slideThreeLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pasos: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#4d4d4d',
  },
  stepsType: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    color: '#4d4d4d',
  },
  factura: {
    fontFamily: 'Poppins',
    fontSize: 13,
    lineHeight: 18,
    color: '#4d4d4d',
    fontWeight: 'normal',
  },
  ellipseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 15,
  },
  ellipsesLeft: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  ellipsesRight: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 32,
    height: 32,
  },
  dot: {
    backgroundColor: '#e1e1e1',
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  pasosOneToThree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 15,
		marginBottom: 15,
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#4d4d4d',
  },
  border: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    width: 290,
    position: 'absolute',
  },
});

export default styles;