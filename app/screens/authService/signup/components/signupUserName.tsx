
import React, { useState, useEffect } from "react";
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import Button from "../../../../components/Button";
import styles from "./styles";
import { DimensionsScale } from "../../../../theme/Dimensions";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import Header from "../../../../components/Header";
import strings from "../../../../components/locales";
// import { connect } from "react-redux";

const SignupUserNameView = (props:any) => {
    return (
        <View style={styles.container}>
        <View style={styles.firstContain}>
            <Header
                isGoBack={false}
                HeaderText={strings.playerSignUp}
                handleBackButton={() => 
                    props.setSignUpOnBoarding(props.isHighSchoolType == 'isHighSchool' ? 8 : 6)}
            />
        <Text>player user name</Text>

        </View>
        <View style={styles.secondContain}>
            <AnimatedProgress
                value={100}
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
                buttonText={strings.finishLabel}
                onPress={() => props.handleFinishSignUp()}
            />
             <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

export default SignupUserNameView;