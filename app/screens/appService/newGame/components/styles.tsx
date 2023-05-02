import { Dimensions, StyleSheet } from "react-native";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  firstContain: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  secondContain: {
    flex: 3.5,
    paddingHorizontal: verticalScale(20),
    justifyContent: "center",
    backgroundColor:colors.commonWhiteColor,
    marginHorizontal: verticalScale(8),
  },
  thirdContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1.5,
  },
  name: {
    color: "#000",
    fontWeight: "bold",
    fontSize: verticalScale(20),
  },
  information: {
    fontSize: verticalScale(16),
    marginTop: verticalScale(2),
    marginBottom: verticalScale(10),
  },
  position: {
    marginTop: verticalScale(5),
  },
  share: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: DimensionsScale.width / 1.13,
  },

  datePicker:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default styles;
