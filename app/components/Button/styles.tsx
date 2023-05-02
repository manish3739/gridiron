import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { verticalScale } from '../../utils/scale';

const BaseStyle = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 10,
        borderRadius: 5,
        paddingVertical: verticalScale(15),
        width: '90%',
        flexDirection:'row'
    },
    buttonLabel: {
        fontSize: verticalScale(16),
        color: colors.commonWhiteColor,
        fontWeight: 'bold'
    },

});

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.7
    },
    body: {
        flex: 5.3,
        backgroundColor: 'white'
    },

});

export const ButtonStyle = StyleSheet.create({
    primaryButton: {
        ...BaseStyle.button,
        backgroundColor: colors.primaryButtonColor,
    },

    primaryButtonLabel: {
        ...BaseStyle.buttonLabel,
        color: colors.commonWhiteColor,
    },

    terButton: {
        ...BaseStyle.button,
        // backgroundColor: colors.commonWhiteColor,
        borderWidth: 1.5,
    },

    terButtonLabel: {
        ...BaseStyle.buttonLabel,
    },

    secondaryButton: {
        ...BaseStyle.button,
        backgroundColor: colors.secondaryButtonColor,
    },

    secondaryButtonLabel: {
        ...BaseStyle.buttonLabel,
        color: colors.commonWhiteColor,
    },

});

export default Styles;