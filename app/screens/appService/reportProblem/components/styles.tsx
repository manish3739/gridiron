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
        paddingTop: 20
    },
    secondContain: {
        flex: 5.5,
        alignItems:'center'
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
    }
});

export default styles;
