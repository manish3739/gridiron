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
        alignItems: 'center',
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
        color: colors.blackColorCode,
        paddingTop: verticalScale(13),
        textAlign: 'center',
        lineHeight: verticalScale(30),
        marginHorizontal: verticalScale(35)
    },
    mainBoldLabelStyle: {
        color: colors.secondaryGreyColor,
        fontSize: verticalScale(13),
        textAlign: 'center',
        width: '80%',
        lineHeight: 20,
    },
    animatedContainer: {
        alignItems: 'center',
        width: '100%'
    },
    checkBoxContainer: {
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: verticalScale(25),
        paddingTop: verticalScale(20)
    },
    listContainerStyle: {
        flexDirection: 'row',
         flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    mainContainList: {
        alignItems: 'center' 
    },
    imageViewStyle: {
        width: verticalScale(150),
        height: verticalScale(90),
        backgroundColor: colors.commonLightGreyColor,
        justifyContent: 'center',
        alignItems: 'center',
        margin: verticalScale(15),
        flexDirection: 'row'
    },
    mainImageStyle: {
        tintColor: colors.secondaryGreyColor,
        width: verticalScale(45),
        height: verticalScale(45)
    },
    locatedMainStyle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: verticalScale(20)
    },
    mainBoldStyle: {
        alignItems: 'center', 
        width: '100%'
    },
    mainGraduateView: {
        flexDirection: 'row',
         width: '100%', 
        justifyContent: 'space-between', 
        paddingHorizontal: verticalScale(25), 
        marginVertical: verticalScale(20) 
    }
});

export default styles;
