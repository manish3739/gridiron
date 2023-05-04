import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as yup from "yup";
import UsernameScreenView from "./components/usernameScreen";
import strings from "../../../components/locales";
import { useNavigation } from "@react-navigation/native";

const UsernameScreen = (props: any) => {
  const navigation: any = useNavigation();

  const [loginData, setLoginData] = useState({
    userName: "",
  });

  const loginValidationSchema = yup.object().shape({
    userName: yup.string().required(strings.userNameRequired),
  });

  async function handleLogin() {
    try {
      navigation.navigate("Account");
    } catch (error) {
      console.log("error:", error);
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <UsernameScreenView
        loginData={loginData}
        handleLogin={handleLogin}
        setLoginData={setLoginData}
        loginValidationSchema={loginValidationSchema}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
  };
};

export default connect(null, mapDispatchToProps)(UsernameScreen);
