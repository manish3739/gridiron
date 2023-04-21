
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import ReportProblemView from "./components/reportProblem";

const ReportProblem = (props:any) => {
    return (
        <View style={{flex:1}}>
               <ReportProblemView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(ReportProblem);