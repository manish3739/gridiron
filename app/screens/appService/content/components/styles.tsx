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
    flex: 0.5,
  },
  secondContain: {
     flex: 2,
    // alignItems: "center",
  },
  thirdContain: {
    flex: 0.3,
    alignItems: "center",
  },
  btnTabActive: {
    borderBottomWidth:3,
    borderColor:colors.primaryButtonColor
  },
  noProfile: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
  },
  button: {
    flexDirection: "row",
    margin: 10,
    alignItems:"center",
    justifyContent:"center"
  },
  btnTab: {
    width: Dimensions.get("window").width / 2.5,
    flexDirection: "row",
    
    padding: 10,
    justifyContent: "center",
    fontSize:16
  },
  buttonEdit:{
    borderColor: colors.darkGreyColor,
    marginTop: 20,
    width: 150,
    backgroundColor: colors.darkGreyColor,
    marginRight: 10,
  },
  shareButton:{
    borderColor: colors.darkGreyColor,
    marginTop: 20,
    width: 150,
    backgroundColor: colors.darkGreyColor,
  },
  addNew:{
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    width:200,
    marginBottom:20
  },
 
  photos:{
    marginTop:10,
    width:100,
    height:100,
    borderRadius:1
  },
  list:{
    flexDirection: "row",
    alignSelf: "center",
  }
});

export default styles;
