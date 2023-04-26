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
    // backgroundColor:"red"
  },
  secondContain:{
    flex:2,
    textAlign:"center"
    // backgroundColor:"red"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
 
  noProfile: {
    height: verticalScale(80),
    width: verticalScale(80),
    borderRadius: 40,
  },
  
});

export default styles;