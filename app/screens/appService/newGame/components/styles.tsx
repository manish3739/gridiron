import { Dimensions, StyleSheet } from "react-native";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";

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
    flex: 0.3,
    paddingTop: verticalScale(20),
  },
  secondContain: {
    backgroundColor: "#fff",
    flex: 1.5,
    paddingHorizontal: verticalScale(20),
    justifyContent: "center",
    marginHorizontal: verticalScale(8),
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
  thirdContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 0.5,
  },
  datePicker:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
});

export default styles;
