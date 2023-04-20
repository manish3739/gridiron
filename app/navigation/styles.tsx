import { Dimensions, StyleSheet } from 'react-native';
import { verticalScale } from '../utils/scale';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textName: {
    // fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: '500',
    fontSize: verticalScale(11),
    color:'red'
  },
  imageStyles: {
    width: 30,
    height: 30,
  },
  tabBarContain: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 50,
  },
});
export default styles;
