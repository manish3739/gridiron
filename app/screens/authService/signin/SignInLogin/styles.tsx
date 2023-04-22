import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../../theme/colors';
import { verticalScale } from '../../../../utils/scale';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',alignItems:'center'
    },
    welcomeStyle:{
        fontSize:25,
        color:"#000",
        marginHorizontal:100,
        fontWeight:"bold"
    },
    Image:{width:'90%',height:280, marginTop:verticalScale(40), marginBottom:verticalScale(150)},
    welcomeScreen:{alignItems:"center", marginVertical:verticalScale(40), flex:1},
    alreadySignInText:{
        color:colors.commonThemeColor,
        paddingVertical:20,
        textDecorationLine:'underline'
    }
 
});

export default styles;
