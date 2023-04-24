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
    flex: 1.5,
  },
  secondContain: {
    flex: 4,
    alignItems: "center",
  },
  thirdContain: {
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
