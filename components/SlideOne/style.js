import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footer: {
    alignItems: 'end',
    justifyContent: 'end',
    bottom: 10,
    marginTop: 12,
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
  },
  slidesContainer: {
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: 30,
    // marginBottom: 30,
  },
  slideOne: {
    height: 192.64,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  paymentsAproved: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  nameAndTime: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'OpenSans-Regular',
    gap: 3.27,
    marginLeft: 8,
  },
  name: {
    fontWeight: '400',
    fontSize: 11.45,
    lineHeight: 15.6,
    color: '#4d4d4d',
  },
  time: {
    fontWeight: '400',
    fontSize: 8.18,
    lineHeight: 11.14,
    color: '#4d4d4d',
  },
  paymentTypeIcon: {
    width: 32.73,
    height: 32.73,
    backgroundColor: '#dfdfdf',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentSlideLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
  },
  amountAndAproved: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'OpenSans-Regular',
    textAlign: 'right',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    gap: 3.27,
    marginRight: 8,
  },
  amount: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '700',
    fontSize: 13.09,
    lineHeight: 17.83,
    color: '#2f2f2f',
  },
  aprovedBlock: {
    width: 67,
    height: 11,
    borderRadius: 81.82,
    backgroundColor: 'rgba(243,243,243,0.7)',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  aproved: {
    fontWeight: '400',
    fontSize: 8.18,
    lineHeight: 11.14,
    color: '#696969',
    paddingHorizontal: 5,
  },
  pagoTarjeta: {
    width: 197.11,
    height: 56.02,
    backgroundColor: '#fff',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    gap: 8.4,
    borderRadius: 144,
    marginVertical: 20,
  },
  pagoTop: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 14.01,
    lineHeight: 21.01,
    color: '#000',
    width: 117,
    height: 21,
  },
  ellipseTop: {
    width: 56.02,
    height: 56.02,
    borderWidth: 4.2,
    borderColor: '#fff',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentTypesBottom: {
    flexDirection: 'row',
    width: 350,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  enlaceType: {
    width: 136,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: 6,
    borderRadius: 68,
    paddingRight: 10,
  },
  enlaceIcon: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enlaceTypeText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: '#000',
  },
  sinpeType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 120,
    height: 34.78,
    backgroundColor: '#fff',
    gap: 5.22,
    borderRadius: 59.13,
    paddingRight: 10,
  },
  sinpeIcon: {
    width: 34.78,
    height: 34.78,
    borderWidth: 2.61,
    borderColor: '#fff',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideOneTop: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'space-between',
    marginVertical: 40,
  },
  sinpeTypeText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 8.7,
    lineHeight: 13.04,
    color: '#000',
  },
});

export default styles;