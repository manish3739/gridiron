import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../theme/colors";
import { verticalScale } from "../../../../utils/scale";
import { fonts } from "../../../../theme/Fonts";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContain: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  secondContain: {
    flex: 4,
    paddingHorizontal: verticalScale(5),
  },
  thirdContain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightIconStyle: {
    tintColor: colors.commonThemeColor,
    height: 18,
    width: 18,
    right: 3,
  },
  boxTextStyle: {
    color: colors.blackColorCode,
    fontSize: verticalScale(16),
    fontWeight: "bold",
    fontFamily: fonts.medium,
  },
  listMainContainer: {
    backgroundColor: "#D1EFEC",
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  scoreMainView: {
    fontSize: verticalScale(13),
    color: colors.blackColorCode,
    paddingVertical: 10,
    fontFamily: fonts.medium,
  },
});

export default styles;
