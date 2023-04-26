
import React, { useState } from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import SignInView from "./SignInLogin/signin";
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup';
import { useAuth } from "../../../contexts/Auth";
import * as user from "../../../redux/actions/userActions";
import strings from "../../../components/locales";

const SignInLogin = (props: any) => {
    const auth = useAuth();
    const navigation: any = useNavigation();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter valid email')
            .required(strings.emailIsRequired),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required(strings.passwordIsRequired),
    });
   

    async function handleLogin(email: string, password: string) {
        try {
            let data = {
                login: email,
                password: password
            }
            props.login(data, (res: any) => onLoginSuccessCallBack(res), (err: any) => onLoginUserFailureCallBack(err),)
            await auth.signIn('@authToken');
        } catch (error) {
            console.log("error:", error);
        }

    }

    function onLoginSuccessCallBack(params: any) {
        console.log("onLoginSuccessCallBack:", params);
    }
    function onLoginUserFailureCallBack(params: any) {
        console.log("onLoginUserFailureCallBack:", params);
    }

    return (
        <View style={{ flex: 1 }}>
            <SignInView
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                handleLogin={handleLogin}
                loginData={loginData}
                setLoginData={setLoginData}
                navigation={navigation}
                loginValidationSchema={loginValidationSchema}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (data: any, successCallBack: any, failureCallBack: any) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(SignInLogin);