
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StatusBar, View } from 'react-native';
import HomeView from "./components/home";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = (props: any) => {
    return (
        <View style={{ flex: 1 }}>
            <HomeView />
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Home);