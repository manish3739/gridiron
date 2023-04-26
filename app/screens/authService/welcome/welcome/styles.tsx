import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../../theme/colors';
import { verticalScale } from '../../../../utils/scale';
import { DimensionsScale } from '../../../../theme/Dimensions';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: verticalScale(90)
    },
    welcomeStyle: {
        fontSize: verticalScale(23),
        color: colors.blackColorCode,
        fontWeight: "bold",
        textAlign: 'center'
    },
    Image: {
        width: DimensionsScale.width * 0.9,
        height: DimensionsScale.height * 0.5,
        backgroundColor: colors.commonLightGreyColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeScreen: {
        flex: 1
    },
    alreadySignInText: {
        color: colors.commonThemeColor,
        paddingVertical: 20,
        textDecorationLine: 'underline'
    },
    secondContainer: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    thirdContainer: {
        flex: 1.5,
        alignItems: 'center'
    },
    imageStyle: {
        tintColor: colors.secondaryGreyColor,
        width: verticalScale(140),
        height: verticalScale(140)
    }

});

export default styles;
