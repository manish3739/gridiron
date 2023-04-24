import { Dimensions, StyleSheet } from "react-native";
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
    flex: 3,
  },
  secondContain: {
    flex: 2,
    alignItems: "center",
  },
  thirdContain: {
    flex: 2,
    alignItems: "center",
  },
  btnTabActive: {
    backgroundColor: "pink",
  },
  noProfile: {
    height: 300,
    width: 300,
  },
 
 
});

export default styles;
