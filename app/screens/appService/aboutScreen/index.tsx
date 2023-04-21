
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import AboutScreenView from "./components/aboutScreen";

const AboutScreen = (props:any) => {
    return (
        <View style={{flex:1}}>
               <AboutScreenView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(AboutScreen);