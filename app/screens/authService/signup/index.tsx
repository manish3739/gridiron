
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import SignUpView from "./components/signup";

const SignUp = (props:any) => {


    return (
        <View style={{flex:1}}>
               <SignUpView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(SignUp);