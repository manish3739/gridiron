
import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import Header from "../../../../components/Header";
import styles from "./styles";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Dropdown from "../../../../components/dropdown";
import { verticalScale } from "../../../../utils/scale";
// import { connect } from "react-redux";

const SignupGraduateView = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    HeaderText={strings.playerSignUp}
                    isGoBack={false}
                    handleBackButton={() => props.setSignUpOnBoarding(5)}
                />
            </View>
            <View style={styles.secondContain}>
                <AnimatedProgress
                    value={90}
                    max={100}
                    activeColor={'#56d1bf'}
                    backgroundColor={"#c4c2c2"}
                    width={DimensionsScale.width * 0.9}
                    style={{ marginVertical: 10 }}
                    height={15}
                />
                <Text style={styles.mainOnBoardingLabel}>{strings.chooseGraduation}</Text>
                <View style={styles.mainGraduateView}>
                    <Dropdown
                        labelField={'name'}
                        placeholder={'Ohio Highschool'}
                        data_list={[
                            {
                                name: 'Delhi',
                                value: 1
                            },
                            {
                                name: 'Karnataka',
                                value: 2
                            },
                            {
                                name: 'Punjab',
                                value: 3
                            },
                        ]}
                        dropDownMainStyle={{ width: DimensionsScale.width * 0.5 }}
                        isMultiple={false}
                    />
                    <Dropdown
                        labelField={'name'}
                        placeholder={'Year'}
                        data_list={[
                            {
                                name: '2020',
                                value: 1
                            },
                            {
                                name: '2021',
                                value: 2
                            },
                            {
                                name: '2022',
                                value: 3
                            },

                        ]}
                        dropDownMainStyle={{ width: DimensionsScale.width * 0.3 }}
                        isMultiple={false}
                    />
                </View>

            </View>

            <View style={styles.thirdContain}>
                <Button
                    onPress={() => { props.setIsHighSchoolType(''), props.setSignUpOnBoarding(7) }}
                />
                <Button
                    buttonText={strings.notInHighSchool}
                    onPress={() => { props.setSignUpOnBoarding(8) }}
                    style={{ borderColor: colors.commonThemeColor, marginTop: 20 }}
                    buttonLabelStyle={{ color: colors.commonThemeColor }}
                    buttonType={"tertiary"}
                />
                <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupGraduateView;