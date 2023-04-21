import React from 'react';
import { Text, StyleSheet, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { verticalScale } from '../../utils/scale';
import { HEADER_BACK_ICON } from '../../theme/constantImages';

const Header = (props: any) => {
    const navigation = useNavigation();
    const {
        HeaderView, HeaderMiddleView, container, MainHeadTxt, leftRightImage
    } = styles;
    const {
        HeaderText,
        RightImage,
        leftImg,
        mncontainer,
        MainHeadStyle,
        HeaderMiddleTxt,
        isGoBack,
        handleBackButton,
        noMiddleLabel,
        rightImageStyle,
        onPressRightImage,
        headerRightText,
        headerRightTextStyle,
    } = props;
    return (
        <>
            <StatusBar
                translucent
                barStyle="dark-content"
            />
            <View style={[container, mncontainer]}>
                <View style={[HeaderView]}>
                    <TouchableOpacity onPress={() => isGoBack ? navigation.goBack() : handleBackButton()}>
                       {leftImg ? <Image
                            resizeMode={"contain"}
                            style={[leftRightImage]}
                            source={leftImg}
                        />:
                        <Text></Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style={[HeaderMiddleView, HeaderMiddleTxt]}>
                    {!noMiddleLabel && <Text numberOfLines={1} style={[MainHeadTxt, MainHeadStyle]}>
                        {HeaderText}
                    </Text>}
                </View>
                <View
                    style={HeaderView}>
                    <TouchableOpacity onPress={() => onPressRightImage()}>
                        {RightImage ? <Image
                            resizeMode={"contain"}
                            style={[leftRightImage, rightImageStyle]}
                            source={RightImage}
                        />:
                        <Text style={[headerRightTextStyle]}>{headerRightText}</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}
Header.defaultProps = {
    HeaderText: "Header text",
    leftImg: HEADER_BACK_ICON
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    HeaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderMiddleView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MainHeadTxt: {
        fontSize: verticalScale(19),
        color: 'black',
        fontWeight: 'bold'
    },
    leftRightImage: {
        height: verticalScale(20),
        width: verticalScale(20)
    }
})
export default Header;