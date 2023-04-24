
import React from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import SettingsView from "./components/settings";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../contexts/Auth";

const Settings = ({ props, navigation }: any) => {
    const auth = useAuth();

    async function handleLogout(params: any) {
        await AsyncStorage.removeItem("loginToken");
        auth.signOut();
    };

    return (
        <View style={{ flex: 1 }}>
            <SettingsView
                handleLogout={handleLogout}
            />
        </View>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
    }
}

export default connect(null, mapDispatchToProps)(Settings);