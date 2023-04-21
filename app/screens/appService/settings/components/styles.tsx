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
        flex: 1
    },
    secondContain: {
        flex: 3.5,
        paddingHorizontal: verticalScale(20)
    },
    thirdContain: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionContainer: {
        flexDirection: 'row',
        paddingVertical: verticalScale(20),
        paddingBottom:10
    },
    optionImage: {
        width: 20,
        height: 20,
        tintColor: colors.commonGreyColor
    },
    optionTextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 10,
        color: colors.blackColorCode
    }
});

export default styles;
