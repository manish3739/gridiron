
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import MembershipScreenView from "./components/membershipScreen";

const MembershipScreen = (props:any) => {
    return (
        <View style={{flex:1}}>
               <MembershipScreenView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(MembershipScreen);