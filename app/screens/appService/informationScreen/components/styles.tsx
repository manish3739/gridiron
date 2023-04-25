import { Dimensions, StyleSheet } from 'react-native';
import { verticalScale } from '../../../../utils/scale';
import { colors } from '../../../../theme/colors';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstContain: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        paddingTop:20
    },
    secondContain: {
        flex: 5.5,
        paddingHorizontal: verticalScale(20),
        paddingTop:verticalScale(40)
    },
    thirdContain: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor: colors.secondaryGreyColor,
        paddingBottom:15,
        marginBottom:verticalScale(20)
    },
    optionFirstContainer: {
        flex: 5.5
    },
    optionSecondContainer: {
        flex: 0.5
    },
    optionLabelStyle: {
        fontSize: verticalScale(18), 
        color: colors.blackColorCode 
    },
    optionImage: {
        width: 17, 
        height: 17
    }
});

export default styles;
