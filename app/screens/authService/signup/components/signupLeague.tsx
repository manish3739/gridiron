
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import Button from "../../../../components/Button";
import styles from "./styles";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Header from "../../../../components/Header";
import strings from "../../../../components/locales";
import Checkbox from "../../../../components/Checkbox";
import { verticalScale } from "../../../../utils/scale";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { colors } from "../../../../theme/colors";

let filtered: any;
const SignupLeagueView = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    isGoBack={false}
                    HeaderText={strings.playerSignUp}
                    handleBackButton={() => props.setSignUpOnBoarding(6)}
                />
            </View>
            <View style={[styles.secondContain, { alignItems: 'baseline', paddingHorizontal: verticalScale(20) }]}>
                <AnimatedProgress
                    value={90}
                    max={100}
                    activeColor={'#56d1bf'}
                    backgroundColor={"#c4c2c2"}
                    width={DimensionsScale.width * 0.9}
                    style={{ marginVertical: 10, alignSelf: 'center' }}
                    height={15}
                />
                <View style={styles.mainBoldStyle}>
                    <Text style={[styles.mainOnBoardingLabel]}>{strings.chooseLeagueLabel}</Text>
                </View>
                <Checkbox
                    data={props.chooseLeague}
                    isHorizontal={false}
                    returnData={(val) => {
                        props.setChooseLeague(val);
                        filtered = val.filter((el, index) => {
                            return el.isSelected === true;
                        });
                        console.log("filtered", filtered)
                    }}
                    textStyle={{ fontSize: verticalScale(15) }}
                    isMultiple={false}
                />
                {filtered &&
                    <RNTextInput
                        editable={true}
                        placeholder={filtered[0].label === 'Middleschool' ? strings.school : 'Pop warner'}
                        keyboardType="default"
                        textInputContainer={{ width: DimensionsScale.width * 0.7, marginLeft: verticalScale(20) }}
                        placeholderTextColor={colors.bluePrimary}
                        />
                }
            </View>
            <View style={styles.thirdContain}>
                <Button
                    onPress={() => props.handleLeagueContinue()}
                />
                <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>{strings.alreadySignIn}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupLeagueView;