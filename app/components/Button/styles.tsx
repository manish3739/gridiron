import { StyleSheet } from 'react-native';

const BaseStyle = StyleSheet.create({
    button: {
        minWidth: 110,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 10
    },
    buttonLabel: {
        fontSize: 11,
        textTransform: 'uppercase',
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
        backgroundColor: 'red'
    },

    primaryButtonLabel: {
        ...BaseStyle.buttonLabel,
        color: 'black',
    },

    terButton: {
        ...BaseStyle.button,
        backgroundColor: 'green'
    },

    terButtonLabel: {
        ...BaseStyle.buttonLabel,
        color: 'black',
    },

    secondaryButton: {
        ...BaseStyle.button,
        backgroundColor: 'yellow',
    },

    secondaryButtonLabel: {
        ...BaseStyle.buttonLabel,
        color: 'black',
    },

});

export default Styles;