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
        paddingHorizontal: verticalScale(20),
    },
    boxTextStyle: {
        color: colors.blackColorCode,
        fontSize: verticalScale(16),
        fontWeight: 'bold'
    },
    greyTextStyle: {
        color: colors.commonLightGreyColor,
        fontSize: 13
    }
});

export default styles;
