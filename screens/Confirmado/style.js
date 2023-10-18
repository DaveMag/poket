import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'column',
		justifyContent:'space-around',
	},
  bannerContainer: {
    backgroundColor: '#d9d9d9',
    height: 57,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // marginTop: 30,
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bannerText: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#333',
    paddingLeft: 5,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
  },
  icon: {
    borderWidth: 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    color: '#333',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 48,
    color: '#333',
    width: 294,
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default style;