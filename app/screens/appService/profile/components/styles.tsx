import { Dimensions, Platform, PlatformIOSStatic, StyleSheet } from "react-native";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

let platformIOS: any;
if (Platform.OS === 'ios') {
  platformIOS = Platform as PlatformIOSStatic
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listTab: {
    marginTop: verticalScale(10),
    flex: platformIOS?.isPad ? 3.8 : 3.2,
  },
  secondContain: {
    flex: platformIOS?.isPad ? 1.2 : 1.8,
  },
  firstContain: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonEdit: {
    borderWidth: 0,
    marginTop: 20,
    width: "49%",
    paddingVertical: 7,
    backgroundColor: "#788896",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: verticalScale(15),
  },
  noProfile: {
    height: verticalScale(100),
    width: verticalScale(100),
    borderRadius: 50,
  },
  btnTabActive: {
    borderBottomWidth: 3,
    borderColor: colors.primaryButtonColor,
  },
  list: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    fontSize: 16,
  },
  filterTab: {
    backgroundColor: "red",
  },
  dataContainer: {
    width: DimensionsScale.width / 4,
    height: DimensionsScale.height / 7,
    backgroundColor: "#E3E8ED",
    marginLeft: 8,
    marginTop: 15,
    alignItems: "center",
    paddingTop: 10,
    borderWidth: 1
  },
  viewState: {
    marginTop: 7,
    fontSize: 12,
    color: colors.primaryButtonColor,
    borderBottomWidth: 1,
    borderColor: colors.primaryButtonColor,
  },
  passing: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  passingContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
    margin: 5,
    marginLeft: verticalScale(25),
  },
  number: {
    color: colors.commonGreyColor,
  },
  passingName: {
    color: colors.blackColorCode,
  },
  verify: {
    color: "red",
    fontWeight: "bold",
  },
  addNew: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: DimensionsScale.width / 1.5,
  },
  thirdContain: {
    flex: 0.5,
    alignItems: "center",
  },
  StatsContainer: {
    backgroundColor: "#eee",
    paddingBottom: 10,
  },
  TrainerContainer: {
    backgroundColor: "#eee",
  },
  trainerFlatlist: {
    height: DimensionsScale.height / 5,
    width: DimensionsScale.width * 0.4,
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  view: {
    justifyContent: "space-around",
    flex: 1,
    marginLeft: 8,
  },
  trainerName: {
    color: colors.commonGreyColor,
    fontSize: 17,
  },
  trainerNumber: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  about: {
    fontWeight: "bold",
    marginLeft: verticalScale(30),
    fontSize: 16,
    color: "#000",
  },
  aboutContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: verticalScale(30),
    marginTop: 10,
  },
  date: {
    color: "#000",
  },
  locationContainer: {
    backgroundColor: "#eee",
  },
  place: {
    marginLeft: verticalScale(30),
    fontSize: 16,
    color: "#000",
  },
  location: {
    marginTop: 10,
    marginLeft: verticalScale(30),
  },
  school: {
    fontWeight: "bold",
    marginLeft: verticalScale(30),
    fontSize: 16,
    color: "#000",
    marginTop: 10,
  },
  nametext: {
    textAlign: "center",
    color: colors.commonGreyColor
  }
});

export default styles;
