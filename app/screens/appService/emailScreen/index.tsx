import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import EmailScreenView from "./components/emailScreen";
import strings from "../../../components/locales";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

const EmailScreen = (props: any) => {
  const navigation: any = useNavigation();

  const [loginData, setLoginData] = useState({
    email: "",
  });

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter valid email"
      )
      .required(strings.emailIsRequired),
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
      <EmailScreenView
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

export default connect(null, mapDispatchToProps)(EmailScreen);
