
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import CompletedChallengesView from "./components/completedChallenges";

const CompletedChallenges = (props:any) => {
    const data = props?.route?.params;
    return (
        <View style={{flex:1}}>
               <CompletedChallengesView 
               data={data}
               />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(CompletedChallenges);