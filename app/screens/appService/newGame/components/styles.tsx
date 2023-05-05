import { Dimensions, StyleSheet } from "react-native";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/Fonts";

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
    backgroundColor: colors.commonWhiteColor,
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
    fontFamily: fonts.medium,

  },
  information: {
    fontSize: verticalScale(16),
    marginTop: verticalScale(2),
    marginBottom: verticalScale(10),
    fontFamily: fonts.medium,

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
  datePicker: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainModalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: colors.commonWhiteColor,
    alignItems: 'center',
    height: DimensionsScale.height / 2.7
  },
  mainView: {
    alignItems: 'center'
  },
  emailContainer: {
    padding: 25,
    backgroundColor: colors.commonLightGreyColor,
    borderWidth: 1,
    borderColor: colors.darkGreyColor
  },
  emailIconStyle: {
    width: 50,
    height: 50,
    tintColor: colors.secondaryGreyColor
  },
  emailTextStyle: {
    fontFamily: fonts.medium,
    paddingTop: 10,
    fontSize: verticalScale(17)
  },
  modalContainer: {
    justifyContent: 'flex-end',
    width: '100%',
    margin: 0
  }
});

export default styles;
