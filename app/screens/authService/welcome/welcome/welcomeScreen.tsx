
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import strings from "../../../../components/locales";
import styles from "./styles";
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { CAMERA_PICKER_ICON, GALLERY_ICON, USER_ICON } from "../../../../theme/constantImages";
import FormImagePicker from "../../../../components/ImagePicker/ImagePicker";

const WelcomeView = () => {

    const [imagePicker, setImagePicker] = useState();
    const navigation: any = useNavigation();
    return (
        <View style={styles.welcomeScreen}>
            <View style={styles.container}>
                <Text style={styles.welcomeStyle} >{strings.welcome}</Text>
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.Image}>
                    <Image
                        style={styles.imageStyle}
                        source={GALLERY_ICON}
                    />
                    {/* <FormImagePicker
                        onImageChange={(source: any) => {
                            setImagePicker(source.uri);
                        }}
                        showPreview={true}
                        renderTrigger={(selectImg: any) => (
                            <>
                                <View >
                                    <View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 100, borderRadius: 90, backgroundColor: colors.secondaryGreyColor }}>
                                            {imagePicker ?
                                                <Image style={{ width: 100, height: 100, borderRadius: 90 }} source={{ uri: imagePicker }} />
                                                :
                                                <Image style={{ tintColor: colors.commonLightGreyColor, width: 40, height: 40 }} source={USER_ICON} />
                                            }
                                        </View>
                                        <TouchableOpacity onPress={() => selectImg()} style={{ height: 30, width: 30, position: 'absolute', right: 0, bottom: 5, backgroundColor: colors.commonGreyColor, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                            <Image style={{ height: 15, width: 15, tintColor: colors.commonLightGreyColor }} source={CAMERA_PICKER_ICON} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}
                    />  */}
                </View>
            </View>
            <View style={styles.thirdContainer}>
                <Button
                    onPress={() => navigation.navigate('Signup')}
                    buttonText={strings.SignUp}
                />
                <Button
                    onPress={() => navigation.navigate('SignIn')}
                    buttonText={strings.SignIn}
                    style={{ borderColor: colors.commonThemeColor, marginTop: 20 }}
                    buttonLabelStyle={{ color: colors.commonThemeColor }}
                    buttonType={"tertiary"}
                />
            </View>

        </View>
    );
};

export default WelcomeView;