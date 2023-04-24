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
    flex: 1.2,
  },
  secondContain: {
    flex: 3.5,
    alignItems: "center",
    marginBottom:10
  },
  thirdContain: {
    flex: 1.5,
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
