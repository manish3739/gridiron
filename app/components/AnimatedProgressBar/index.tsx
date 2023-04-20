import React from 'react'
// Customizable Area Start
import { StyleSheet, Text, View, Animated, Easing, ViewStyle, Dimensions, StyleProp } from 'react-native'
import { DimensionsScale } from '../../theme/Dimensions'
import { verticalScale } from '../../utils/scale'
const WIDTH = Dimensions.get('screen').width

interface ProgressProp {
    max: number,
    length?: number,
    hideTextProgress?: boolean,
    activeColor?: string,
    backgroundColor?: string,
    duration?: number,
    width?: number,
    height?: number,
    value?: number,
    borderRadius?: number,
    spaceVertical?: number,
    style?: StyleProp<ViewStyle>,
    status?: boolean
    testId?: string
}

const AnimatedProgress = (Props: ProgressProp) => {

    const activeColor: ViewStyle = {
        backgroundColor: Props.activeColor ? Props.activeColor : 'black'
    }

    let progressAnim = React.useRef(new Animated.Value(Number(Props?.value))).current
    let backgroundColor = Props.backgroundColor ? Props.backgroundColor : "rgba(236,240,241,1)"
    let width = Props.width ? Props.width : WIDTH
    let height = Props.height ? Props.height : 6
    let maximum = Props.max ? Props.max : 100
    let borderRadius = Props.borderRadius ? Props.borderRadius : 2
    let marginVertical = Props.spaceVertical ? Props.spaceVertical : 0

    React.useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: Number(Props.value),
            duration: 800,
            useNativeDriver: false,
            easing: Easing.ease
        }).start();
        progressAnim.setValue(Number(Props.value))
    }, [Props.value])

    let value = progressAnim.interpolate({
        inputRange: [0, maximum],
        outputRange: ['0%', '100%']
    })

    const CONTAINER: ViewStyle = {
        ...styles.container,
        height, width, backgroundColor, borderRadius, marginVertical,

    }

    return (
        <>
            <View testID={Props.testId} style={[CONTAINER, Props.style]}>
                <Animated.View style={{ ...styles.view, backgroundColor: activeColor.backgroundColor, width: value }} />
            </View>
            {Props.status && <Text style={[styles.text]}>{Props?.value}% Completed</Text>}
        </>
    )
}

export default AnimatedProgress

const styles = StyleSheet.create({
    container: {
        width: DimensionsScale.width*0.2,
        height: DimensionsScale.height*0.2,
        overflow: "hidden",

    },
    progress: {
        width: DimensionsScale.width*0.2,
        height: DimensionsScale.height*0.2,
    },
    section: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignSelf: "flex-start",
    },
    text: {
        fontSize: verticalScale(10),
        marginTop: 5,
        color: 'black',
        fontFamily: "Poppins-Medium",
    },
    view: {
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
    },
})
