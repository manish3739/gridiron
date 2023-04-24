
import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Button from "../../../../components/Button";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import { verticalScale } from "../../../../utils/scale";
import RNTextInput from "../../../../components/Input/RNTextInput";
import Checkbox from "../../../../components/Checkbox";
import { Formik } from "formik";
import * as yup from 'yup';

const SignupEmailView = (props: any) => {
    const emailValidation  = yup.object().shape({
        email: yup
            .string()
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please enter valid email')
            .required('Email Address is Required'),
    });
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    HeaderText={strings.playerSignUp}
                    isGoBack={true}
                />
            </View>
            <Formik
                enableReinitialize
                initialValues={{
                    email: ""
                }}
                onSubmit={(values, action) => {
                    props.setRegisterData({
                        ...props.registerData,
                        email: values.email,
                      });
                    props.setSignUpOnBoarding(1)
                }}
                validationSchema={emailValidation}
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
                                    value={15}
                                    max={100}
                                    activeColor={'#56d1bf'}
                                    backgroundColor={"#c4c2c2"}
                                    width={DimensionsScale.width * 0.9}
                                    style={{ marginVertical: 10 }}
                                    height={15}
                                />
                                <Text style={styles.mainOnBoardingLabel}>{strings.getStartedEmail}</Text>
                                <Text style={[styles.mainBoldLabelStyle, { paddingTop: 15 }]}>{strings.schoolEmailPreferred}</Text>
                                <Text style={styles.mainBoldLabelStyle}>{strings.mailwithVerify}</Text>

                                <RNTextInput
                                    editable={true}
                                    placeholder="name@school.edu or other"
                                    keyboardType="default"
                                    placeholderTextColor="#00000040"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    // @ts-ignore
                                    error={errors.email || undefined}
                                    isError={touched.email && errors.email}
                                />
                                <Checkbox
                                    data={props.isChildrenData}
                                    isHorizontal={false}
                                    returnData={(val) => props.setIsChildrenData(val)}
                                    textStyle={{ fontSize: 17 }}
                                    isMultiple={false}
                                />
                                <View style={{ paddingTop: verticalScale(25) }}>
                                    <Text style={styles.mainBoldLabelStyle}>{strings.signingUpAgreeing}</Text>
                                    <Text style={[styles.alreadySignInText, { paddingVertical: 0, fontSize: verticalScale(13) }]}>{strings.termsAndConditions}</Text>
                                </View>
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
    );
};
export default SignupEmailView;