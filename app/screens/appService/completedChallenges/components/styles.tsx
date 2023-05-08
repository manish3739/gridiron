import { Dimensions, StyleSheet } from "react-native";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";
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
    paddingHorizontal: verticalScale(20),
    paddingTop: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  thirdContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom:verticalScale(30)
  },
  descprtnTextLabel: {
    color: colors.blackColorCode,
    lineHeight: verticalScale(22),
    fontSize: verticalScale(15),
  },
  pleaseAllowTextStyle: {
    color: colors.commonLightGreyColor,
    lineHeight: verticalScale(22),
    fontSize: verticalScale(12),
  },
  headerTextStyle: {
    color: colors.commonThemeColor,
    fontWeight: "bold",
    fontSize: verticalScale(17),
  },
  gallery: {
    height: verticalScale(50),
    width: verticalScale(50),
    tintColor: colors.commonGreyColor,
  },
  galleryContainer: {
    backgroundColor: colors.commonLightGreyColor,
    height: verticalScale(180),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  galleryContainer1: {
    borderColor: colors.commonGreyColor,
    height: verticalScale(190),
    width: "100%",
    alignItems: "center",
    borderWidth: 2,
  },
  testText: {
    fontSize: verticalScale(20),
    marginBottom: verticalScale(25),
  },
  details: {
    fontFamily: fonts.medium,
    fontSize: verticalScale(25),
    fontWeight: "bold",

    paddingTop: verticalScale(65),
    marginBottom: verticalScale(45),
  },
  point: {
    fontFamily: fonts.medium,
    fontSize: verticalScale(18),
  },
});

export default styles;
