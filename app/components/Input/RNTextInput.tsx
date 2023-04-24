import React from 'react'
import { View, Text, StyleSheet, Dimensions, StyleProp, ViewStyle, TextInput, TextInputProps, Image } from 'react-native'
import { verticalScale } from '../../utils/scale'
import { colors } from '../../theme/colors';
import { CHECKED_BOX, HEADER_BACK_ICON } from '../../theme/constantImages';

const { height } = Dimensions.get('screen')

interface RNTextInputProps extends TextInputProps {
    title?: string,
    containerStyle?: StyleProp<ViewStyle>,
    error?: string,
    sectionStyle?: StyleProp<ViewStyle>,
    showTextLength?: boolean,
    testID?: any;
    showLeftImage?: boolean,
    showRightImage?: boolean,
    textInputContainer?: any,
    leftIconStyle?: any,
    rightIconStyle?: any,
    leftImage?: any,
    rightImage?: any,
    textName?:any,
    isError?:any,
}

const RNTextInput = (Props: RNTextInputProps) => {
    return (
        <View testID={Props.testID} style={[styles.container, Props.containerStyle]}>
            <Text style={styles.textStyle}>{Props.textName}</Text>
              {Props.showLeftImage &&
                <Image style={[styles.leftImageStyle,Props.leftIconStyle]} source={Props.leftImage} />
              }
                <TextInput
                    style={[styles.textInput,Props.textInputContainer]}
                    placeholderTextColor="#00000040"
                    editable
                    selectionColor={colors.commonGreyColor}
                    {...Props}
                />
                {Props.showRightImage &&
                <Image style={[styles.rightImageStyle,Props.rightIconStyle]} source={Props.rightImage} />
              }
            {
                Props.isError &&
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
    textStyle:{
      color:"#000",
      marginTop:10
    },
    textInput: {
        paddingLeft: verticalScale(20),
        paddingVertical: verticalScale(15),
        fontSize: verticalScale(18),
        fontWeight:'bold',
        color: colors.blackColorCode,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 7,
        flexDirection: "row",
        alignItems: "center",
    },
    leftImageStyle: {
        height:20,
        width:20,
        position:'absolute',
        top:verticalScale(40),
        left:10
    },
    rightImageStyle: {
        height:20,
        width:20,
        position:'absolute',
        top:verticalScale(40),
        right:10
    }
})
