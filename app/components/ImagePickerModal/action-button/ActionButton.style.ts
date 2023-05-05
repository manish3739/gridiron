import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import { fonts } from "../../../theme/Fonts";

export const _dynamicBorderStyle = (isLastItem: boolean): ViewStyle => ({
  borderBottomLeftRadius: isLastItem ? 12 : 0,
  borderBottomRightRadius: isLastItem ? 12 : 0,
});

interface Style {
  actionButtonStyle: ViewStyle;
  actionButtonTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  actionButtonStyle: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: fonts.medium,
  },
  actionButtonTextStyle: {
    color: "#fff",
    fontWeight: "bold",
  },
});
