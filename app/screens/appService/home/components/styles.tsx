import { Dimensions, StyleSheet } from "react-native";
import { verticalScale } from "../../../../utils/scale";
import { DimensionsScale } from "../../../../theme/Dimensions";
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
    flex: 2,
    marginTop: verticalScale(50),
  },
  secondContain: {
    flex: 2,
    alignItems: "center",
  },
  thirdContain: {
    flex: 2,
  },
  thirdContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: verticalScale(10),
  },
  lineStyle: {
    width: "100%",
    borderColor: colors.commonGreyColor,
    borderWidth: 1,
    marginTop: verticalScale(15),
  },
  noProfile: {
    height: verticalScale(100),
    width: verticalScale(100),
    borderRadius: 50,
    marginTop: verticalScale(20),
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  verify: {
    color: "red",
    fontWeight: "bold",
    marginTop: verticalScale(10),
  },
  image: {
    height: verticalScale(15),
    width: verticalScale(20),
    tintColor: colors.commonWhiteColor,
    marginRight: verticalScale(10),
  },
  recentGames: {
    flexDirection: "row",
    height: verticalScale(30),
    width: verticalScale(90),
    backgroundColor: "#e8833a",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  Stats: {
    color: colors.commonWhiteColor,
  },
  games: {
    color: colors.blackColorCode,
    fontSize: verticalScale(20),
    fontWeight: "bold",
  },
  gamesFlatlist: {
    width: "90%",
    height: verticalScale(40),
    backgroundColor: "#fae6d8",
    marginVertical: verticalScale(5),

    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "#e8833a",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: verticalScale(5),
  },
  challengesFlatlist: {
    width: "90%",
    height: verticalScale(100),
    backgroundColor: "#d1efec",
    marginVertical: verticalScale(5),

    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    alignItems: "center",
    paddingHorizontal: verticalScale(20),
  },
  gameName: {
    color: colors.blackColorCode,
  },
  date: {
    color: colors.blackColorCode,
  },
  stats: {
    color: colors.primaryButtonColor,
    borderBottomWidth: 1,
    borderColor: colors.primaryButtonColor,
  },
  allStats: {
    width: DimensionsScale.width / 2.8,
    height: DimensionsScale.width / 9,
    paddingVertical: 1,
    marginRight: 5,
  },
  addNew: {
    width: DimensionsScale.width / 3,
    height: DimensionsScale.width / 9,
    paddingVertical: 1,
    marginRight: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: verticalScale(10),
  },
  personalRecords: {
    flexDirection: "row",
    height: verticalScale(30),
    width: verticalScale(95),
    backgroundColor: "#3baea0",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flexDirection: "row",
    height: verticalScale(30),
    width: verticalScale(100),
    backgroundColor: "red",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  trainerFlatlist: {
    height: DimensionsScale.height / 6.5,
    width: DimensionsScale.width * 0.4,
    backgroundColor: "#fff",
    margin: verticalScale(10),
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.commonGreyColor,
    justifyContent: "center",
  },
  //
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
    fontSize: verticalScale(20),
    color: colors.commonGreyColor,
  },
  flatlist: {
    alignItems: "center",
  },
  number: {
    fontWeight: "bold",
    fontSize: verticalScale(16),
    color: colors.blackColorCode,
    marginTop: verticalScale(8),
  },
  challenges: {
    color: colors.commonWhiteColor,
  },
  IQchallenges: {
    flexDirection: "row",
    height: verticalScale(30),
    width: verticalScale(120),
    backgroundColor: "purple",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  nameChallenges: {
    fontSize: verticalScale(22),
    fontWeight: "bold",
    color: colors.blackColorCode,
    marginBottom: verticalScale(5),
  },
  dateChallenges: {
    fontSize: verticalScale(18),
    color: colors.blackColorCode,
  },
  scoreChallenges: {
    fontSize: verticalScale(18),
    color: colors.blackColorCode,
  },
  mainContain: {
    flex: 1,
    margin: verticalScale(10),
    backgroundColor: colors.commonLightGreyColor,
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(100),
    marginHorizontal: verticalScale(20),
  },
  videoIconStyle: {
    width: verticalScale(50),
    height: verticalScale(50),
    tintColor: colors.secondaryGreyColor,
  },
});

export default styles;
