
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import MyChallengesView from "./components/myChallenges";

const MyChallenges = (props:any) => {
    return (
        <View style={{flex:1}}>
               <MyChallengesView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(MyChallenges);