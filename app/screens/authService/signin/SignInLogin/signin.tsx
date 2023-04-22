
import React, { useState, useEffect } from "react";
import {Text, View } from "react-native";
import strings from "../../../../components/locales";
import styles from "./styles";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { useNavigation } from "@react-navigation/native";

const SignInView = (props: any) => {
    const navigation:any = useNavigation()

  return (
    <View style={styles.welcomeScreen}>
     <View style={{marginBottom:50}}>
     <Header
        HeaderText={strings.SignIn}
        isGoBack={false}
        handleBackButton={() => navigation.goBack()}
      />
     </View>
      <RNTextInput
        textName={strings.Email}
        editable={true}
        placeholder="name@school.edu"
        keyboardType="default"
        showLeftImage={true}
        showRightImage={true}
        placeholderTextColor="#00000040"
      />
      <RNTextInput
        textName={strings.Password}
        editable={true}
        placeholder="Password"
        keyboardType="default"
        showLeftImage={true}
        showRightImage={true}
        placeholderTextColor="#00000040"
      />

      <Text style={styles.alreadySignInText}>{strings.ForgetPassword}</Text>

      <Button buttonText={strings.continue} />
      <Text style={styles.alreadySignInText}>{strings.DontHaveAccount}</Text>
    </View>
  );
};

export default SignInView;
