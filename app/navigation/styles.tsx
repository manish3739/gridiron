import { Dimensions, StyleSheet } from 'react-native';
import { verticalScale } from '../utils/scale';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textName: {
    fontWeight: '500',
    fontSize: verticalScale(13),
    color:'red'
  },
  tabBarContain: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 4
  },
  iconStyles: {
    width:25,
    height:25
  }
});
export default styles;
