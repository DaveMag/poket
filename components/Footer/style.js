import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#333',
  },
  containerBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 50,
    lineHeight: 19,
    paddingTop: 10,
  },
  bold: {
    fontSize: 14,
    fontWeight: '800',
    color: '#333',
  },
});

export default style;