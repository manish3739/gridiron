
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import EmailScreenView from "./components/emailScreen";

const EmailScreen = (props:any) => {
    return (
        <View style={{flex:1}}>
               <EmailScreenView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(EmailScreen);