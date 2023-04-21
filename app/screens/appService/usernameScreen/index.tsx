
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import UsernameScreenView from "./components/usernameScreen";

const UsernameScreen = (props:any) => {
    return (
        <View style={{flex:1}}>
               <UsernameScreenView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(UsernameScreen);