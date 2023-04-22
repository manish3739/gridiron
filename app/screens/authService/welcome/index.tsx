
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import WelcomeView from "./welcome/welcomeScreen";


const Welcome = (props:any) => {
    return (
        <View style={{flex:1}}>
               <WelcomeView/>
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Welcome );