
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StatusBar, View } from 'react-native';
import HomeView from "./components/home";
import * as homeActions from '../../../redux/actions/homeActions';

const Home = (props: any) => {
    useEffect(() => {
        handleHomeData();
    }, [])

    function handleHomeData() {
        props.categories((res: any) => geCategoriesSuccessCallBack(res), (error: any) => getCategoriesFailureCallBack(error));

    }
    function geCategoriesSuccessCallBack(params: any) {
        console.log("geCategoriesSuccessCallBack:", params);
    }
    function getCategoriesFailureCallBack(params: any) {
        console.log("getCategoriesFailureCallBack:", params);
    }
    return (
        <View style={{ flex: 1 }}>
            <HomeView />
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        categories: (data: any, successCallBack: any, failureCallBack: any) => dispatch(homeActions.getCategories(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Home);