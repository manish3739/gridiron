
import React from "react";
import { Alert, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { Formik } from "formik";
import * as yup from 'yup';

const SignupPasswordView = (props: any) => {
    const passwordValidation = yup.object().shape({
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required(strings.passwordIsRequired)
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
                            handleBackButton={() => props.setSignUpOnBoarding(0)}
                        />
                    </View>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            password: props.registerData.password
                        }}
                        onSubmit={(values, action) => {
                            props.setRegisterData({
                                ...props.registerData,
                                password: values.password,
                            });
                            props.setSignUpOnBoarding(2)
                        }}
                        validationSchema={passwordValidation}
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
                                            value={30}
                                            max={100}
                                            activeColor={'#56d1bf'}
                                            backgroundColor={"#c4c2c2"}
                                            width={DimensionsScale.width * 0.9}
                                            style={{ marginVertical: 10 }}
                                            height={15}
                                        />
                                        <Text style={styles.mainOnBoardingLabel}>{strings.choosePasswordLabel}</Text>

                                        <RNTextInput
                                            editable={true}
                                            placeholder={strings.passwordLabel}
                                            keyboardType="default"
                                            value={values.password}
                                            placeholderTextColor="#00000040"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            error={String(errors.password || '')}
                                            isError={touched.password && errors.password}
                                        />
                                    </View>
                                </View>
                                <View style={styles.thirdContain}>
                                    <Button
                                        onPress={() => { handleSubmit() }}
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

export default SignupPasswordView;