import React, { Fragment, useState } from 'react';
import { View, Image, TextInput, Text, StyleSheet, Platform } from 'react-native';
const Input = React.forwardRef((props, ref) => {
    const [isFocused, setIsfocused] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const {
        autoCapitalize,
        autoFocus,
        multiline,
        placeholder,
        onChangeText,
        placeholderTextColor,
        blurOnSubmit,
        editable,
        numberOfLines,
        maxLength,
        onSubmitEditing
    }: any = props;
    const {
        container, textInput, labelStyle
    } = style;
    return (
        <Fragment>
            <View style={[container]}>
                <TextInput
                    blurOnSubmit={blurOnSubmit}
                    // minLength={minLength}
                    numberOfLines={numberOfLines}
                    maxLength={maxLength}
                    onChangeText={(text) => onChangeText(text)}
                    keyboardType="default"
                    autoCapitalize={autoCapitalize}
                    autoFocus={autoFocus}
                    multiline={multiline}
                    // ref={ref}
                    placeholder={placeholder}
                    // returnKeyType={returnKeyType}
                    // value={value}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={'red'}
                    style={[textInput]}
                    // onFocus={_handleFocus}
                    // onBlur={_handleBlur}
                    editable={editable}
                    onSubmitEditing={onSubmitEditing}
                />
            </View>
        </Fragment>
    );
})
Input.defaultProps = {
    // placeholder: "name",
    // secureTextEntry: false,
    // placeholderTextColor: BLACK_COLOR_CODE,
    // keyboardType: "default",
    // value: "",
    // InputType: null
};
const style = StyleSheet.create({
    container: {
        height: 70,
        borderColor: 'black',
        borderWidth: 1,
        margin: 20,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 15,
        zIndex: 0,
        justifyContent: Platform.OS === "ios" ? 'flex-start' : 'center',
    },
    labelStyle: {
        position: 'absolute',
        left: 5,
        justifyContent: "center",
        fontFamily: 'bold',
        color: 'black',
        textTransform: 'uppercase'
    },
    textInput: {
        fontSize: 20,
        paddingLeft: 5,
        paddingTop: Platform.OS === "ios" ? 15 : 0

    }
})
export default Input;