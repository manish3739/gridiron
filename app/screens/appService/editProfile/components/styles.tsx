import { Dimensions, StyleSheet } from "react-native";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";

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
    marginTop: 40,
  },
  secondContain: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primaryButtonColor,
    marginTop: verticalScale(5),
  },
  secoundContainerView: { alignItems: "center" },
  noProfile: {
    height: verticalScale(80),
    width: verticalScale(80),
    borderRadius: 40,
  },
  thirdContainer: {
    flex: 4,
    marginTop: verticalScale(20),
  },
  about: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginLeft: verticalScale(32),
  },
  fourthContainer: {
    flex: 2,

    marginHorizontal: verticalScale(10),
  },
  birthdayView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },

  schoolContainer: {
    flexDirection: "row",
    marginTop: verticalScale(15),
    alignItems: "center",
    marginLeft: verticalScale(45),
    justifyContent: "space-evenly",
  },
  graduation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(15),
  },
  footbal: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    marginLeft: verticalScale(20),
    marginTop: 15,
  },
  footbalContainer: {
    flexDirection: "row",
    marginTop: verticalScale(10),
    marginLeft: verticalScale(10),
  },
});

export default styles;
