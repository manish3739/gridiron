
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
import Dropdown from "../../../../components/dropdown";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { verticalScale } from "../../../../utils/scale";
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
            <View style={[styles.secondContain, { alignItems: 'baseline', paddingHorizontal: verticalScale(20) }]}>
                <AnimatedProgress
                    value={80}
                    max={100}
                    activeColor={'#56d1bf'}
                    backgroundColor={"#c4c2c2"}
                    width={DimensionsScale.width * 0.9}
                    style={{ marginVertical: 10 }}
                    height={15}
                />
                <View style={styles.mainBoldStyle}>
                    <Text style={[styles.mainOnBoardingLabel]}>{strings.whereYouLocated}</Text>
                </View>
                <View style={styles.locatedMainStyle}>
                    <View style={{ flex: 4 }}>
                        <RNTextInput
                            editable={true}
                            placeholder={strings.cityLabel}
                            keyboardType={'number-pad'}
                            showLeftImage={true}
                            autoCapitalize="none"
                            isTextLabel={true}
                            placeholderTextColor="#00000040"
                            textInputContainer={{ width: DimensionsScale.width * 0.5, paddingVertical: 6.5 }}
                        />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Dropdown
                            labelField={'name'}
                            placeholder={'State'}
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
                            isMultiple={false}
                            dropDownMainStyle={{ width: DimensionsScale.width * 0.3 }}
                        />
                    </View>
                </View>
                <RNTextInput
                    editable={true}
                    placeholder={strings.zipCodeLabel}
                    keyboardType={'number-pad'}
                    showLeftImage={true}
                    autoCapitalize="none"
                    isTextLabel={true}
                    placeholderTextColor="#00000040"
                    textInputContainer={{ width: DimensionsScale.width * 0.5, paddingVertical: 6.5, marginVertical: 20 }}
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