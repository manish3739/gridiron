import { Dimensions, StyleSheet } from 'react-native';
import { verticalScale } from '../../../../utils/scale';
import { colors } from '../../../../theme/colors';
import { fonts } from '../../../../theme/Fonts';

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
        paddingTop: 20
    },
    secondContain: {
        flex: 5.5,
        paddingHorizontal: verticalScale(20),
        paddingTop: verticalScale(40)
    },
    descprtnTextLabel: {
        color: colors.blackColorCode,
        lineHeight: verticalScale(22),
        fontSize: verticalScale(15)
    },
    pleaseAllowTextStyle: {
        color: colors.commonLightGreyColor,
        lineHeight: verticalScale(22),
        fontSize: verticalScale(12)
    },
    headerTextStyle: {
        color: colors.commonThemeColor,
        fontWeight: 'bold',
        fontSize: verticalScale(17)
    },
    optionFirstContainer: {
        flex: 5.5
    },
    optionSecondContainer: {
        flex: 0.5
    },
    optionLabelStyle: {
        fontSize: verticalScale(18), 
        color: colors.blackColorCode ,
        fontFamily: fonts.medium,

    },
    optionImage: {
        width: 17, 
        height: 17
    },
    optionContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:colors.secondaryGreyColor,
        paddingBottom:15,
        marginBottom:verticalScale(20)
    },
});

export default styles;
