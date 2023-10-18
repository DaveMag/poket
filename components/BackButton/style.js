import {StyleSheet} from 'react-native';
import { horizontalScale } from '../../assets/style/scaling';


const style = StyleSheet.create({
  container: {
    // backgroundColor: '#fafafa',
    width: horizontalScale(34),
    height: horizontalScale(34),
    // borderRadius: horizontalScale(26),
		textAlign: 'left',
  },
	arrow: {
		fontSize: horizontalScale(34),
		color: '#000',
		fontWeight: 'bold',
	},
});

export default style;
