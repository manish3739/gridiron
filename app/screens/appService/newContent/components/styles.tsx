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
    flex: 1,
  },
  secondContain: {
    flex: 5,
    alignItems: "center",
  },
  btnTabActive: {
    backgroundColor: "pink",
  },
  noProfile: {
    height: DimensionsScale.height*0.4,
    width: DimensionsScale.width*0.9,
  },
  textInputContainer: {
    width: '100%', 
    alignItems:'center',
    paddingTop:verticalScale(12)
  }
});

export default styles;