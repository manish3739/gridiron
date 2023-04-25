import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../theme/colors";
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
    flex: 1,
  },
  secondContain: {
    flex: 4.5,
  },
  thirdContain: {
    flex: 0.5,
    alignItems: "center"
  },
  btnTabActive: {
    borderBottomWidth: 3,
    borderColor: colors.primaryButtonColor
  },
  noProfile: {
    height: verticalScale(100),
    width: verticalScale(100),
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: verticalScale(15)
  },
  btnTab: {
    width: Dimensions.get("window").width / 2.5,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    fontSize: 16
  },
  buttonEdit: {
    borderWidth: 0,
    marginTop: 20,
    width: '49%',
    paddingVertical: 7,
    backgroundColor: "#788896",
},
  addNew: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 200,
  },

  photos: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 1
  },
  list: {
    flexDirection: "row",
    alignSelf: "center",
  },
  gridMainContainer: {
    height: DimensionsScale.height / 2.8
  },
  mainContain: {
    flex: 1,
    margin: 3,
    backgroundColor: '#E3E8ED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  videoIconStyle: {
    width: 50,
    height: 50,
    tintColor: '#9EADBA'
  }
});

export default styles;