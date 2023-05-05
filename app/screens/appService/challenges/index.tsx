
import React, { useState } from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import ChallengesView from "./components/challenges";

const Challenges = (props: any) => {
    const [sportsData, setSportsData] = useState([])
    const [challengesList, setChallengesList] = useState(
        [{ label: 'Quaterback Test', description: 'Test your wists, you got to be quick and accurate!',score:'1200' },
        { label: 'Football Test', description: 'Test your wists, you got to be quick and accurate!',score:'1200' },
        { label: 'Defense Test', description: 'Test your wists, you got to be quick and accurate!',score:'1200' }]
    )
    return (
        <View style={{ flex: 1 }}>
            <ChallengesView
                sportsData={sportsData}
                setSportsData={setSportsData}
                challengesList={challengesList}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Challenges);