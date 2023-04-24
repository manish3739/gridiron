
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
import { useNavigation } from "@react-navigation/native";

const SignUp = ({props,navigation}:any) => {
    const [signUpOnBoarding, setSignUpOnBoarding] = useState(0);
    const [isHighSchoolType, setIsHighSchoolType] = useState('');
    const [registerData, setRegisterData] = useState({
        email: "",
    });
    console.log("registerData:", registerData);
    const [isChildrenData, setIsChildrenData] = useState([
        {
            label: 'I am 13 years of age or older',
            isSelected: false
          },
          {
            label: "I am parent managing my child's account",
            isSelected: false
          }
    ]);

    // handle league button
    function handleLeagueContinue() {
       setIsHighSchoolType('isHighSchool');
       setSignUpOnBoarding(7);
    };
    // handle to navigate sign in page
    function handleAlreadySignIn() {
        navigation.navigate('SignIn');
    };
    // handle to complete sign up
    function handleFinishSignUp(params:any) {
        navigation.navigate('App');
    }

    return (
        <View style={{ flex: 1 }}>
            {signUpOnBoarding == 0 &&
                <SignupEmailView
                    isChildrenData={isChildrenData}
                    setIsChildrenData={setIsChildrenData}
                    setSignUpOnBoarding={setSignUpOnBoarding}
                    handleAlreadySignIn={handleAlreadySignIn}
                    setRegisterData={setRegisterData}
                    registerData={registerData}
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
                    handleFinishSignUp={handleFinishSignUp}
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