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
  },
  secondContain: {
    flex: 4,
    justifyContent: "center",
    marginHorizontal: verticalScale(8),
  },
  thirdContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
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
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    paddingHorizontal: verticalScale(20),
    flex: 3,
  },
  footbal: {
    color: "#000",
    fontWeight: "bold",
    fontSize: verticalScale(22),
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
  share: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: DimensionsScale.width / 2,
  },
  passingContainer: {
    backgroundColor: colors.commonWhiteColor,
    paddingHorizontal: verticalScale(20),
    paddingVertical: verticalScale(10),
    paddingBottom: verticalScale(40)
  },
  rushingContainer: {
    backgroundColor: colors.commonWhiteColor,
    marginTop: 10,
    paddingHorizontal: verticalScale(20),
    paddingVertical: verticalScale(10),
    paddingBottom: verticalScale(40)
  }
});

export default styles;
