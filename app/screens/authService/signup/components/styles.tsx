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
        alignItems: 'center'
    },
    thirdContain: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alreadySignInText: {
        color: colors.commonThemeColor,
        paddingVertical: 20,
        textDecorationLine: 'underline'
    },
    mainOnBoardingLabel: {
        fontWeight: 'bold',
        fontSize: verticalScale(22),
        color: colors.blackColorCode
    },
    mainBoldLabelStyle: {
        color: '#788896',
        fontSize: verticalScale(13),
        textAlign: 'center',
        width: '80%',
        lineHeight: 20,
    },
    animatedContainer: {
        alignItems: 'center', 
        width:'100%'
    }
});

export default styles;
