
import React, { useState } from "react";
import { Alert, View } from 'react-native';
import { connect } from "react-redux";
import SignupEmailView from "./components/signupEmail";
import SignupGraduateView from "./components/signupGraduate";
import SignupInformationView from "./components/signupInformation";
import SignupLeagueView from "./components/signupLeague";
import SignupLocatedPlayerView from "./components/signupLocatedPlayer";
import SignupPasswordView from "./components/signupPassword";
import SignupPlayerSportView from "./components/signupPlayerSport";
import SignupPositionPlayerView from "./components/signupPositionPlayer";
import SignupUserNameView from "./components/signupUserName";


const SignUp = (props: any) => {

    const [signUpOnBoarding, setSignUpOnBoarding] = useState(0);
    const [isHighSchoolType, setIsHighSchoolType] = useState('');

    // handle league button
    function handleLeagueContinue() {
       setIsHighSchoolType('isHighSchool');
       setSignUpOnBoarding(7);
    };
    // handle to navigate sign in page
    function handleAlreadySignIn() {
       Alert.alert("Redirect to signIn");
    };

    return (
        <View style={{ flex: 1 }}>
            {signUpOnBoarding == 0 &&
                <SignupEmailView
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 1 &&
                <SignupPasswordView
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 2 &&
                <SignupInformationView
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 3 &&
                <SignupPlayerSportView
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 4 &&
                <SignupPositionPlayerView
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 5 &&
                <SignupLocatedPlayerView
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 6 &&
                <SignupGraduateView
                    setIsHighSchoolType={setIsHighSchoolType}
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 7 &&
                <SignupUserNameView
                    isHighSchoolType={isHighSchoolType}
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                />
            }
            {signUpOnBoarding == 8 &&
                <SignupLeagueView
                    handleLeagueContinue={handleLeagueContinue}
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}

                />
            }
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(SignUp);