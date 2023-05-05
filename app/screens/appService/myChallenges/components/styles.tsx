import { Dimensions, Platform, PlatformIOSStatic, StyleSheet } from 'react-native';
import { platformIOS, verticalScale } from '../../../../utils/scale';
import { colors } from '../../../../theme/colors';
import { fonts } from '../../../../theme/Fonts';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstContain: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        paddingTop: platformIOS?.isPad ? 0 : verticalScale(20)
    },
    secondContain: {
        flex: 5.5,
    },
    boxTextStyle: {
        color: colors.blackColorCode,
        fontSize: verticalScale(16),
        fontWeight: 'bold',
        fontFamily: fonts.medium,

    },
    greyTextStyle: {
        color: colors.secondaryGreyColor,
        fontSize: 13,
        fontFamily: fonts.medium,

    },
    mainInformationContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: verticalScale(15),
        paddingTop: 15
    },
    IQTextConatiner: {
        alignItems: 'center', 
        paddingTop: verticalScale(20) 
    },
    mainGreyContainer: {
        backgroundColor: '#F8F9FA', 
        paddingTop: verticalScale(20), 
        marginTop: verticalScale(20),
        paddingHorizontal:verticalScale(15)
    },
    listMainContainer: {
        backgroundColor: '#D1EFEC', 
        marginHorizontal: 15, 
        paddingHorizontal: 10,
        marginVertical:10
    },
    scoreMainView: {
        fontSize: verticalScale(16), 
        color: colors.blackColorCode, 
        paddingVertical: 20,
        fontFamily: fonts.medium,

    }
});

export default styles;
