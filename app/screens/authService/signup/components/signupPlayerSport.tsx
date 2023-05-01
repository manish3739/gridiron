
import React from "react";
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from "./styles";
import Header from "../../../../components/Header";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Button from "../../../../components/Button";
import strings from "../../../../components/locales";
import { GALLERY_ICON } from "../../../../theme/constantImages";
import { verticalScale } from "../../../../utils/scale";

const SignupPlayerSportView = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstContain}>
                <Header
                    isGoBack={false}
                    HeaderText={strings.playerSignUp}
                    handleBackButton={() => props.setSignUpOnBoarding(2)}
                />
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
                <View style={{ flex: 1 }}>
                    <Text style={styles.mainOnBoardingLabel}>{strings.chooseSportLabel}</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <FlatList
                        data={[{ label: 'Baseball' }, { label: 'Cricket' }, { label: 'Football' }]}
                        contentContainerStyle={styles.listContainerStyle}
                        renderItem={({ item, index }: any) => {
                            return (
                                <>
                                    <TouchableOpacity style={styles.mainContainList}>
                                        <View
                                            style={styles.imageViewStyle}>
                                            <Image style={styles.mainImageStyle} source={GALLERY_ICON} />
                                        </View>
                                        <Text style={{ textAlign: 'center', fontSize: verticalScale(14) }}>
                                            {item.label}
                                        </Text>
                                    </TouchableOpacity>
                                </>
                            )
                        }}
                    />
                </View>
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