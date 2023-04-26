
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
import Dropdown from "../../../../components/dropdown";
// import { connect } from "react-redux";

const SignupLocatedPlayerView = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    isGoBack={false}
                    HeaderText={strings.playerSignUp}
                    handleBackButton={() => props.setSignUpOnBoarding(4)}
                />
            </View>
            <View style={styles.secondContain}>
                <AnimatedProgress
                    value={80}
                    max={100}
                    activeColor={'#56d1bf'}
                    backgroundColor={"#c4c2c2"}
                    width={DimensionsScale.width * 0.9}
                    style={{ marginVertical: 10 }}
                    height={15}
                />
                <Text style={styles.mainOnBoardingLabel}>{strings.whereYouLocated}</Text>
                <Dropdown
                    renderSelectedItem={(value: any) => console.log("value000", value)}
                    labelField={'name'}
                    data_list={
                        [
                            {
                                name: 'indore',
                                value: 1
                            },
                            {
                                name: 'bhopal',
                                value: 2
                            },
                        ]
                    }
                />
            </View>

            <View style={styles.thirdContain}>
                <Button
                    onPress={() => props.setSignUpOnBoarding(6)}
                />
                <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupLocatedPlayerView;