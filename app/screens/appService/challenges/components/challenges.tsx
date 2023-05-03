
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { FlatList, Platform, PlatformIOSStatic, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../theme/colors";
import { USER_ICON } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { platformIOS, verticalScale } from "../../../../utils/scale";

const ChallengesView = (props: any) => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    noMiddleLabel={true}
                    leftImg={false}
                    RightImage={USER_ICON}
                    headerRightText={"My Challenges"}
                    isRightHeaderText={true}
                    headerRightTextStyle={{ color: colors.commonThemeColor }}
                    isLeftHeaderText={true}
                    leftHeaderContainer={{ flex: platformIOS?.isPad ? 1 : 2 }}
                    HeaderMiddleTxt={{ flex: platformIOS?.isPad ? 4 : 1 }}
                    rightHeaderContainer={{ flex: platformIOS?.isPad ? 1 : 3, alignItems: 'flex-end' }}
                    leftHeaderText={"IQ Challenges"}
                    rightImageStyle={styles.rightIconStyle}
                    mncontainer={{paddingHorizontal:verticalScale(20)}}
                    onPressRightImage={() => navigation.navigate('MyChallenges')}
                />
            </View>
            <View style={styles.secondContain}>
                <FlatList
                    data={props.challengesList}
                    // @ts-ignore
                    renderItem={(item: {
                        [x: string]: any; label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                    }, index: any) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('CompletedChallenges', { challengeDetail: item?.item.label })} style={styles.listMainContainer}>
                                <Text style={[styles.boxTextStyle, { fontSize: verticalScale(19), paddingVertical: 20,paddingBottom:10 }]}>{item?.item.label}</Text>
                                <Text style={styles.scoreMainView}>{item?.item?.description}</Text>
                                <Text style={[styles.scoreMainView,{textAlign:'right'}]}>{item?.item?.score} points</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <View style={styles.thirdContain}>

            </View>

        </View>
    );
};

export default ChallengesView;