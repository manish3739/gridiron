
import React, { useState } from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import ProfileView from "./components/profile";
import { useNavigation } from "@react-navigation/native";

const Profile = (props: any) => {
    const navigation: any = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ProfileView
                navigation={navigation}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Profile);