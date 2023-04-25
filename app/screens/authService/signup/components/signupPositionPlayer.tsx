
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
import { Formik } from "formik";
import * as yup from 'yup';
import Checkbox from "../../../../components/Checkbox";
import { verticalScale } from "../../../../utils/scale";

const SignupPositionPlayerView = (props: any) => {
    // const validationSchema = yup.object().shape({
    //     playerPosition: yup
    //         .array()
    //         .required('Player position is required'),
    // });
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    isGoBack={false}
                    HeaderText={strings.playerSignUp}
                    handleBackButton={() => props.setSignUpOnBoarding(3)}
                />
            </View>
            <Formik
                enableReinitialize
                initialValues={{
                    playerPosition: [],
                }}
                onSubmit={(values, action) => {
                    props.setRegisterData({
                        ...props.registerData,
                        playerPosition: values.playerPosition,
                    });
                    console.log("values:", values);
                    props.setSignUpOnBoarding(5)
                }}
            // validationSchema={validationSchema}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                    setFieldValue
                }) => (
                    <>
                        <View style={styles.secondContain}>
                            <AnimatedProgress
                                value={70}
                                max={100}
                                activeColor={'#56d1bf'}
                                backgroundColor={"#c4c2c2"}
                                width={DimensionsScale.width * 0.9}
                                style={{ marginVertical: 10 }}
                                height={15}
                            />
                            <Text style={styles.mainOnBoardingLabel}>{strings.choosePositionLabel}</Text>
                            <View style={styles.checkBoxContainer}>
                                <Checkbox
                                    data={props.playerPositions}
                                    isHorizontal={false}
                                    returnData={(val) => {
                                        props.setPlayerPositions(val);
                                        const filtered = val.filter((el, index) => {
                                            return el.isSelected === true;
                                        });
                                        setFieldValue('playerPosition', filtered);
                                    }}
                                    textStyle={{ fontSize: verticalScale(15) }}
                                    isMultiple={true}
                                    error={String(errors.playerPosition || '')}
                                    isError={touched.playerPosition && errors.playerPosition}
                                />
                            </View>
                        </View>

                        <View style={styles.thirdContain}>
                            <Button
                                onPress={() =>  props.setSignUpOnBoarding(5)}
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

export default SignupPositionPlayerView;