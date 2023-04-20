
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Text, View } from 'react-native';


const ContentView = (props:any) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Content screen</Text>
        </View>
    );
};

export default ContentView;