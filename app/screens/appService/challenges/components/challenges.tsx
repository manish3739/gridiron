
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { ScrollView, Text, View } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../../theme/colors";
import { USER_ICON } from "../../../../theme/constantImages";


const ChallengesView = (props: any) => {
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
                        RightImage={USER_ICON}
                        headerRightText={"My Challenges"}
                        isRightHeaderText={true}
                        headerRightTextStyle={{ color: colors.commonThemeColor }}
                        isLeftHeaderText={true}
                        leftHeaderContainer={{ flex: 2 }}
                        HeaderMiddleTxt={{ flex: 1 }}
                        rightHeaderContainer={{ flex: 3, alignItems: 'flex-end' }}
                        leftHeaderText={"IQ Challenges"}
                        rightImageStyle={styles.rightIconStyle}
                        onPressRightImage={() => navigation.navigate('MyChallenges')}
                    />
                </View>
                <View style={styles.secondContain}>
                    <View style={{ flex: 2, backgroundColor: 'red' }}>

                    </View>
                    <View style={{ flex: 4, backgroundColor: 'green' }}>

                    </View>
                </View>

                <View style={styles.thirdContain}>

                </View>

            </View>
        </ScrollView>
    );
};

export default ChallengesView;