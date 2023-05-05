import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../theme/colors";
import { verticalScale } from "../../../../utils/scale";
import { fonts } from "../../../../theme/Fonts";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeStyle: {
    fontSize: 25,
    color: "#000",
    marginHorizontal: 100,
    fontWeight: "bold",
  },
  Image: {
    width: "90%",
    height: 280,
    marginTop: verticalScale(40),
    marginBottom: verticalScale(150),
  },
  welcomeScreen: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  alreadySignInText: {
    color: colors.commonThemeColor,
    paddingVertical: 20,
    textDecorationLine: "underline",
    fontFamily: fonts.medium,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
  },
  secondContainer: {
    flex: 5,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
