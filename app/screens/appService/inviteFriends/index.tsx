
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import InviteFriendsView from "./components/inviteFriends";

const InviteFriends = (props:any) => {
    return (
        <View style={{flex:1}}>
               <InviteFriendsView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(InviteFriends);