
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
// import { connect } from "react-redux";

const SignupPlayerSportView = (props:any) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    isGoBack={false}
                    HeaderText={strings.playerSignUp}
                    handleBackButton={() => props.setSignUpOnBoarding(2)}
                />
            <Text>player sport</Text>

            </View>
            <View style={styles.secondContain}>
                <AnimatedProgress
                    value={60}
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
                    onPress={() => props.setSignUpOnBoarding(4)}
                />
                  <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupPlayerSportView;