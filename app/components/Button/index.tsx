import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonStyle } from './styles';


const Button = (props:any) => {
    const {
        buttonText, style, buttonLabelStyle, onPress, disabled, buttonType
    } = props;
    const {
        button, buttonLabel
    } = styles;


    let btnStyle;
    let btnLabelStyle;
    switch (buttonType) {
        case "tertiary":
            btnStyle = ButtonStyle.terButton;
            btnLabelStyle = ButtonStyle.terButtonLabel;
            break;
        case "secondary":
            btnStyle = ButtonStyle.secondaryButton;
            btnLabelStyle = ButtonStyle.secondaryButtonLabel;
            break;
        case "primary":
        default:
            btnStyle = ButtonStyle.primaryButton;
            btnLabelStyle = ButtonStyle.primaryButtonLabel;
            break;
    }
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[btnStyle, style]}>
                
            <Text
             style={[btnLabelStyle, buttonLabelStyle]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
}
Button.defaultProps = {
    buttonText: "Submit",
    buttonType: "primary"
};
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        padding: 10
    },
    buttonLabel: {
        fontSize: 20,
        fontFamily: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 10
    },
})
export default Button;