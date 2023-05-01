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
    marginTop: verticalScale(50),
  },
  secondContain: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
  },
  name: {
    fontSize: verticalScale(16),
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
    fontSize: verticalScale(18),
    color: "#000",
    marginLeft: verticalScale(10),
  },
  fourthContainer: {
    flex: 2,
  },
  birthdayView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: verticalScale(20),
  },

  schoolContainer: {
    flexDirection: "row",
    marginTop: verticalScale(15),
    justifyContent: "space-around",
    marginHorizontal: verticalScale(29),
  },
  graduation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: verticalScale(15),
  },
  footbal: {
    fontWeight: "bold",
    fontSize: verticalScale(18),
    color: "#000",
    marginLeft: verticalScale(6),
    marginTop: verticalScale(15),
  },
  footbalContainer: {
    flexDirection: "row",
    marginTop: verticalScale(10),
    marginLeft: verticalScale(6),
  },
  imagepickerStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: colors.secondaryGreyColor,
  },
  picker: { 
    width: 100, 
    height: 100, 
    borderRadius: 90 
  },
  imagePicker: {
    height: 30,
    width: 30,
    position: "absolute",
    right: 0,
    bottom: 5,
    backgroundColor: colors.commonGreyColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  image: {
    height: 15,
    width: 15,
    tintColor: colors.commonLightGreyColor,
  },
  image2: {
    tintColor: colors.commonLightGreyColor,
    width: 40,
    height: 40,
  },
});

export default styles;
