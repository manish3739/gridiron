
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import LoginView from "./components/login";

const Login = (props:any) => {
    return (
        <View style={{flex:1}}>
               <LoginView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Login);