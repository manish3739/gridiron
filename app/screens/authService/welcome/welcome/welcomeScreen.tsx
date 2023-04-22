
import React, { useState, useEffect } from "react";
import { Image, Text, View } from 'react-native';
import strings from "../../../../components/locales";
import styles from "./styles";
import { NO_IMAGE_PROFILE } from "../../../../theme/constantImages";
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";
import { useNavigation } from "@react-navigation/native";



const WelcomeView = (props: any) => {

    const navigation: any = useNavigation()
    return (
        <View style={styles.welcomeScreen}>
            <View style={styles.container}>
                <Text style={styles.welcomeStyle} >{strings.welcome}</Text>
            </View>
            <Image
                style={styles.Image}
                source={NO_IMAGE_PROFILE}
            />
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
    );
};

export default WelcomeView;


// import React, { useState, useEffect } from "react";
// import {Text, View } from "react-native";
// import strings from "../../../../components/locales";
// import styles from "./styles";
// import Button from "../../../../components/Button";
// import Header from "../../../../components/Header";
// import RNTextInput from "../../../../components/Input/RNTextInput";

// const SignInScreen = (props: any) => {
//   return (
//     <View style={styles.welcomeScreen}>
//      <View style={{marginBottom:50}}>
//      <Header
//         HeaderText={strings.SignIn}
//         isGoBack={false}
//         handleBackButton={() => props.navigation.goBack()}
//       />
//      </View>
//       <RNTextInput
//         textName={strings.Email}
//         editable={true}
//         placeholder="name@school.edu"
//         keyboardType="default"
//         showLeftImage={true}
//         showRightImage={true}
//         placeholderTextColor="#00000040"
//       />
//       <RNTextInput
//         textName={strings.Password}
//         editable={true}
//         placeholder="Password"
//         keyboardType="default"
//         showLeftImage={true}
//         showRightImage={true}
//         placeholderTextColor="#00000040"
//       />

//       <Text style={styles.alreadySignInText}>{strings.ForgetPassword}</Text>

//       <Button buttonText={strings.continue} />
//       <Text style={styles.alreadySignInText}>{strings.DontHaveAccount}</Text>
//     </View>
//   );
// };

// export default SignInScreen;
