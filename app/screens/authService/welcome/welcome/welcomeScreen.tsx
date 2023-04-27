
import React from "react";
import { Image, Text, View } from 'react-native';
import strings from "../../../../components/locales";
import styles from "./styles";
import { GALLERY_ICON } from "../../../../theme/constantImages";
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "../../../../components/DateTimePicker";

const WelcomeView = (props: any) => {

    const navigation: any = useNavigation()
    return (
        <View style={styles.welcomeScreen}>
            <View style={styles.container}>
                <Text style={styles.welcomeStyle} >{strings.welcome}</Text>
            </View>
            <View style={styles.secondContainer}>
           <View style={styles.Image}>
           {/* <Image
                 style={styles.imageStyle}
                source={GALLERY_ICON}
            /> */}
            <DatePicker
            renderDate={(date:any) => console.log("datee",date)}
            renderTime={(time:any) => console.log("time",time)}
            />
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