
import React from "react";
import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
import { KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { Keyboard } from "react-native";
import * as yup from 'yup';
import Checkbox from "../../../../components/Checkbox";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";

const SignupInformationView = (props: any) => {
    const validationSchema = yup.object().shape({
        firstName: yup.string()
            .label('First Name')
            .test('len', 'Enter valid first name', val => /^[a-zA-Z()]+$/.test(val || ''))
            .required('First name required'),
        lastName: yup.string()
            .label('Last Name')
            .test('len', 'Enter valid last name', val => /^[a-zA-Z()]+$/.test(val || ''))
            .required('Last name required'),
        gender: yup
        .number()
        .required('Gender is required'),
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
                            handleBackButton={() => props.setSignUpOnBoarding(1)}
                        />
                    </View>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            firstName: props.registerData.firstName,
                            lastName: props.registerData.lastName,
                            gender: props.registerData.gender,
                        }}
                        onSubmit={(values, action) => {
                            props.setRegisterData({
                                ...props.registerData,
                                firstName: values.firstName,
                                lastName: values.lastName,
                                gender: values.gender,
                            });
                            props.setSignUpOnBoarding(3)
                        }}
                        validationSchema={validationSchema}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                            isValid,
                            setFieldValue,
                        }) => (
                            <>
                                <View style={styles.secondContain}>
                                    <View style={styles.animatedContainer}>
                                        <AnimatedProgress
                                            value={45}
                                            max={100}
                                            activeColor={'#56d1bf'}
                                            backgroundColor={"#c4c2c2"}
                                            width={DimensionsScale.width * 0.9}
                                            style={{ marginVertical: 10 }}
                                            height={15}
                                        />
                                        <Text style={styles.mainOnBoardingLabel}>{strings.fullNameLabel}</Text>
                                        <RNTextInput
                                            editable={true}
                                            placeholder={strings.firstNameLabel}
                                            keyboardType="default"
                                            value={values.firstName}
                                            placeholderTextColor={colors.bluePrimary}
                                            onChangeText={handleChange('firstName')}
                                            onBlur={handleBlur('firstName')}
                                            error={String(errors.firstName || undefined)}
                                            isError={touched.firstName && errors.firstName}
                                        />
                                        <RNTextInput
                                            editable={true}
                                            placeholder={strings.lastNameLabel}
                                            keyboardType="default"
                                            value={values.lastName}
                                            placeholderTextColor={colors.bluePrimary}
                                            onChangeText={handleChange('lastName')}
                                            onBlur={handleBlur('lastName')}
                                            error={String(errors.lastName || undefined)}
                                            isError={touched.lastName && errors.lastName}
                                        />
                                        <Checkbox
                                            data={props.isSportData}
                                            isHorizontal={true}
                                            returnData={(val) => {
                                                props.setIsSportData(val);
                                                const filtered = val.filter((el,index) => {
                                                    return el.isSelected === true;
                                                  });
                                                setFieldValue('gender',filtered[0].index)
                                            }}
                                            textStyle={{ fontSize: verticalScale(15) }}
                                            isMultiple={false}
                                            error={String(errors.gender || '')}
                                            isError={touched.gender && errors.gender}
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

export default SignupInformationView;