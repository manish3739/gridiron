
import React, { useState } from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import SignInView from "./SignInLogin/signin";
import { useNavigation } from "@react-navigation/native";
import * as yup from 'yup';
import { useAuth } from "../../../contexts/Auth";
import * as user from "../../../redux/actions/userActions";

const SignInLogin = (props: any) => {
    const auth = useAuth();
    const navigation: any = useNavigation();

    const loginValidationSchema = yup.object().shape({
        email: yup
            .string()
            .label('test')
            .email("Please enter valid email")
            .required('Email Address is Required'),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),
    });
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    async function handleLogin(email: string, password: string) {
        try {
            let data = {
                login: email,
                password: password
            }
            props.login(data, (res:any) => onLoginSuccessCallBack(res), (err:any) => onLoginUserFailureCallBack(err),)
            await auth.signIn(email, password);
        } catch (error) {
            console.log("error:", error);
        }

    }

    function onLoginSuccessCallBack(params:any) {
        console.log("onLoginSuccessCallBack:", params);
    }
    function onLoginUserFailureCallBack(params:any) {
        console.log("onLoginUserFailureCallBack:", params);
    }

    return (
        <View style={{ flex: 1 }}>
            <SignInView
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