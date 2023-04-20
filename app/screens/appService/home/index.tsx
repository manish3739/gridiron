
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View } from 'react-native';
import HomeView from "./components/home";

const Home = (props:any) => {
    return (
        <View style={{flex:1}}>
               <HomeView />
        </View>
    );
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Home);