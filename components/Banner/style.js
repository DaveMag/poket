import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  banner: {
    height: 96,
    width: 355,
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    height: 60,
    width: 342,
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 29.59,
    color: '#333',
    letterSpacing: 1.2,
    marginVertical: 3,
  },
  midLine: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
    lineHeight: 21.52,
    marginTop: 0,
  },
  subTitle: {
    height: 36,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21.52,
    color: '#333',
    marginTop: 0,
  },
});

export default style;