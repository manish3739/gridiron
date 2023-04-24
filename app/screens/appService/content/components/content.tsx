
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Image, ScrollView, Text, View } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import { DRAWER_ICON, USER_ICON } from "../../../../theme/constantImages";
import { useNavigation } from "@react-navigation/native";

const ContentView = (props: any) => {
    const navigation: any = useNavigation();
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                <View style={styles.firstContain}>
                    <Header
                        noMiddleLabel={true}
                        leftImg={false}
                        RightImage={DRAWER_ICON}
                        isLeftHeaderText={true}
                        leftHeaderContainer={{ flex: 2 }}
                        HeaderMiddleTxt={{ flex: 3 }}
                        leftHeaderText={"Test" + ' ' + "verified"}
                        rightImageStyle={{ tintColor: '#8B99A5' }}
                        onPressRightImage={() => navigation.navigate('Settings')}
                    />
                </View>
                <View style={styles.secondContain}>
                 <View style={{flex:2}}>

                 </View>
                 <View style={{flex:4}}>
                    
                </View>
                </View>

                <View style={styles.thirdContain}>

                </View>

            </View>
        </ScrollView>
    );
};

export default ContentView;