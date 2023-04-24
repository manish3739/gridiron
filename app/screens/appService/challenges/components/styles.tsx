import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../../theme/colors';
import { verticalScale } from '../../../../utils/scale';

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
        paddingHorizontal:verticalScale(5)
    },
    thirdContain: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIconStyle: {
        tintColor: colors.commonThemeColor, 
        height: 18, 
        width: 18, 
        right: 3
    },
    boxTextStyle: {
        color: colors.blackColorCode,
        fontSize: verticalScale(16),
        fontWeight: 'bold'
    },
    listMainContainer: {
        backgroundColor: '#D1EFEC', 
        marginHorizontal: 15, 
        paddingHorizontal: 10,
        marginVertical:10
    },
    scoreMainView: {
        fontSize: verticalScale(13), 
        color: colors.blackColorCode, 
        paddingVertical:10
    }
});

export default styles;
