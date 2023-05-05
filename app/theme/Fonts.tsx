import { Platform } from "react-native";

export const fonts = {
  // light: Platform.OS === 'ios' ? 'FuturaBT-Light' : 'FuturaLtBT',
  // normal: Platform.OS === 'ios' ? 'Futura Bk BT' : 'FuturaBookBT',
  medium: Platform.OS == 'ios' ? 'DINNextLTArabic-Medium' : 'ArabicMedium',
  // heavy: Platform.OS === 'ios' ? 'FuturaBT-Heavy' : 'FuturaHvBT',
};
