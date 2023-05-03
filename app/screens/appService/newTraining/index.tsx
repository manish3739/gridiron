
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import NewTrainingView from "./components/newTraining";



const NewTraining = (props:any) => {
    const data = [
        {
          name: "40 Yard Dash",
          nameText:"(seconds)",

          id: 1,
        },
        {
          nameText:"(lbs)",
          name: "Branch Press",
          id: 1,
        },
        {
          nameText:"(lbs)",
          name: "Squat",
          id: 1,
        },
        {
          nameText:"(in)",
          name: "Vertical",
          id: 1,
        },
      ];
    return (
        <View style={{flex:1}}>
               <NewTrainingView
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

export default connect(null, mapDispatchToProps)(NewTraining);