import { Dimensions, StyleSheet } from "react-native";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstContain: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.7,
    paddingTop: verticalScale(10),
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
  nameInformation: {
    justifyContent: "space-around",
    flexDirection: "row",
    paddingBottom: 10,
  },
  footbal: {
    color: "#000",
    fontWeight: "bold",
    fontSize: verticalScale(22),
  },
  secondContain: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: verticalScale(15),
    marginHorizontal: verticalScale(8),
    paddingVertical: verticalScale(10),
  },
  passing: {
    marginTop: verticalScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passing2: {
    marginTop: verticalScale(20),
    flexDirection: "row",
  },
  thirdContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    flex: 0.7,
  },
  share: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: DimensionsScale.width / 2,
  },
});

export default styles;
