
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import Button from "../../../../components/Button";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
// import { connect } from "react-redux";

const SignupEmailView = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    HeaderText={strings.playerSignUp}
                    isGoBack={true}
                />
                <Text>Email</Text>
            </View>
            <View style={styles.secondContain}>
                <AnimatedProgress
                    value={15}
                    max={100}
                    activeColor={'#56d1bf'}
                    backgroundColor={"#c4c2c2"}
                    width={DimensionsScale.width * 0.9}
                    style={{ marginVertical: 10 }}
                    height={15}
                />
            </View>

            <View style={styles.thirdContain}>
                <Button
                    onPress={() => props.setSignUpOnBoarding(1)}
                />
                <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupEmailView;