import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import styles from './AppLoaderStyle';
import { connect } from "react-redux";
// import AnimatedLottieView from 'lottie-react-native';

const AppLoader = (props:any) => {
        if (!props.isFetching) {
            return null;
        } else {
            return (
                <></>
                // <View style={styles.container}>
                //     <View style={{
                //         backgroundColor:"rgba(0, 0, 0, 0.6)",
                //         position:'absolute',
                //         top:0,left:0,right:0,bottom:0
                //     }}>
                //     <AnimatedLottieView
                //         style={styles.emptyBuilding}
                //         source={require('../../assets/LottieJson/LoadingDots.json')} autoPlay loop />
                //     </View>
                // </View>
            )
        }
    };

const mapStateToProps = (state: { commonReducer: { isFetching: any; }; }) => {
    return {
        isFetching: state.commonReducer.isFetching,
    };
}

export default connect(mapStateToProps)(AppLoader);