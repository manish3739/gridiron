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
    flex: 1.2,
  },
  secondContain: {
    flex: 2.3,
  },
  thirdContainer: {
    flex: 2.5,
    alignItems: "center",
  },
  training: {
    fontSize: verticalScale(24),
    textAlign: "center",
    fontWeight: "bold",
    color: colors.blackColorCode,
    paddingTop: verticalScale(15),
  },
  trainerFlatlist: {
    height: DimensionsScale.height / 5.5,
    width: DimensionsScale.width * 0.4,
    backgroundColor: "#fff",
    margin: verticalScale(10),
    alignItems: "center",
  },
  view: {
    justifyContent: "space-around",
    flex: 1,
    marginLeft: verticalScale(8),
  },
  trainerName: {
    color: colors.commonGreyColor,
    fontSize: verticalScale(17),
    marginTop: verticalScale(10),
  },
  trainerNumber: {
    color: "#000",
    fontSize: verticalScale(22),
    fontWeight: "bold",
  },
  nametext: {
    textAlign: "center",
    fontSize: verticalScale(20),
    color: colors.commonGreyColor,
  },
  saveTraining: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: DimensionsScale.width / 1.6,
    marginTop: verticalScale(25),
  },
});

export default styles;
