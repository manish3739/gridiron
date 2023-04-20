import {Dimensions} from 'react-native';
const dWidth = Dimensions.get('window').width;
const dHeight = Dimensions.get('window').height;
export const DimensionsScale = {
  width: dWidth,
  height: dHeight,
};