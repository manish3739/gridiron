import React from 'react'
import { View, Text, StyleSheet, Dimensions, StyleProp, ViewStyle, TextInput, TextInputProps, ImageStyle } from 'react-native'
import { verticalScale } from '../../utils/scale'
import { colors } from '../../theme/colors';

const { height } = Dimensions.get('screen')

interface RNTextInputProps extends TextInputProps {
    title?: string,
    containerStyle?: StyleProp<ViewStyle>,
    error?: string,
    leftImage?: any,
    rightImage?: any,
    sectionStyle?: StyleProp<ViewStyle>,
    showTextLength?: boolean,
    testID?: any;
    show?: boolean,
    minHeight?: number,
}

const RNTextInput = (Props: RNTextInputProps) => {
    return (
        <View testID={Props.testID} style={[styles.container, Props.containerStyle]}>
                <TextInput
                    style={{ ...styles.textInput }}
                    placeholderTextColor="#00000040"
                    editable
                    {...Props}
                />
            {
                Props.error !== undefined && (!!Props.error) &&
                <Text style={styles.error}>{Props?.error}</Text>
            }
        </View>
    )
}

export default React.memo(RNTextInput)

const styles = StyleSheet.create({
    container: {
        width: "90%",
    },
    error: {
        fontSize: verticalScale(15),
        color: "red",
        marginLeft: 7,
        marginTop: 4,
    },
    textInput: {
        paddingLeft: 10,
        paddingVertical: verticalScale(15),
        fontSize: verticalScale(18),
        fontWeight:'bold',
        color: colors.commonGreyColor,
        marginVertical:20,
        borderWidth: 2,
        borderColor: '#d4cfd0',
        borderRadius: 7,
        flexDirection: "row",
        alignItems: "center"
    },
})
