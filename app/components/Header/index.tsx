import React from 'react';
import { Text, StyleSheet, Image, View, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = (props:any) => {
    const navigation = useNavigation();
    const {
        HeaderView, HeaderMiddleView, container, MainHeadTxt
    } = styles;
    const {
        HeaderText, RightImage, leftImg, mncontainer,  MainHeadStyle, HeaderMiddleTxt,statusbarcolor,barStyle
    } = props;
    return (
        <>
            <View style={[container, mncontainer]}>
                <StatusBar
                    backgroundColor={statusbarcolor}
                    barStyle={barStyle}
                />
                <View style={[HeaderView]}>
                        <Image
                            resizeMode={"cover"}
                            style={{ width: 30, height: 30 }}
                            source={leftImg}
                        />
                </View>
                <View style={[HeaderMiddleView, HeaderMiddleTxt]}>
                        <Text numberOfLines={1} style={[MainHeadTxt, MainHeadStyle]}>
                            {HeaderText}
                        </Text>
                </View>
                <View
                    style={HeaderView}>
                  <Image
                        style={{ width: 45, height: 45 }}
                        source={RightImage}
                    /> 
                </View>
            </View>
        </>
    );
}
Header.defaultProps = {
    HeaderText: "CommonName",
    RightImage: "",
    showleftimage: true,
    showlabel: true,
    logOutType: 0,
    statusbarcolor: 'black',
    leftNav: false,
    barStyle: 'light-content'
};
const styles = StyleSheet.create({
    container:
    {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
        paddingLeft: 28,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        height: Platform.OS === "ios" ? 120 : 65
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
    MainDotView: {
        flexDirection: 'row'
    },
    MainHeadTxt: {
        fontFamily: 'bold',
        fontSize: 20,
        color: 'white'
    }
})
export default Header;