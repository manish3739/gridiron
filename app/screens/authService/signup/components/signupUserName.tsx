
import React, { useState, useEffect } from "react";
import { Alert, Text, View, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import Button from "../../../../components/Button";
import styles from "./styles";
import { DimensionsScale } from "../../../../theme/Dimensions";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import Header from "../../../../components/Header";
import strings from "../../../../components/locales";
import { TouchableWithoutFeedback } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import RNTextInput from "../../../../components/Input/RNTextInput";
import { colors } from "../../../../theme/colors";

const SignupUserNameView = (props: any) => {
    const usernameValidation = yup.object().shape({
        username: yup.string()
            .test('len', 'Enter valid user name', val => /^[a-zA-Z()]+$/.test(val || ''))
            .required('User name required'),
    });
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : undefined}
                style={[styles.container]}
            >
                <View style={styles.container}>
                    <View style={styles.firstContain}>
                        <Header
                            HeaderText={strings.playerSignUp}
                            isGoBack={false}
                            handleBackButton={() => 
                                props.setSignUpOnBoarding(props.isHighSchoolType == 'isHighSchool' ? 8 : 6)}
                        />
                    </View>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            username: ""
                        }}
                        onSubmit={(values, action) => {
                            props.setRegisterData({
                                ...props.registerData,
                                username: values.username,
                            });
                            props.handleFinishSignUp()
                        }}
                        validationSchema={usernameValidation}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid,
                        }) => (
                            <>
                                <View style={styles.secondContain}>
                                    <View style={styles.animatedContainer}>
                                        <AnimatedProgress
                                            value={100}
                                            max={100}
                                            activeColor={'#56d1bf'}
                                            backgroundColor={"#c4c2c2"}
                                            width={DimensionsScale.width * 0.9}
                                            style={{ marginVertical: 10 }}
                                            height={15}
                                        />
                                        <Text style={styles.mainOnBoardingLabel}>{strings.chooseUniqueUsername}</Text>
                                        <RNTextInput
                                            editable={true}
                                            placeholder={strings.userNameLabel}
                                            keyboardType="default"
                                            value={values.username}
                                            placeholderTextColor={colors.bluePrimary}
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                            error={String(errors.username || '')}
                                            isError={touched.username && errors.username}
                                        />
                                    </View>
                                </View>
                                <View style={styles.thirdContain}>
                                    <Button
                                        onPress={() => { handleSubmit() }}
                                        buttonText={strings.finishLabel}
                                    />
                                    <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                                        <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </Formik>


                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >
    );
};

export default SignupUserNameView;