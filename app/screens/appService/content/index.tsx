
import React, { useState } from "react";
import { View } from 'react-native';
import { connect } from "react-redux";
import ContentView from "./components/content";
import { useNavigation } from "@react-navigation/native";

const Content = (props: any) => {
  const listTab = [
    {
      status: "Photos",
    },
    {
      status: "Videos",
    },
  ];
  const [status, setStatus] = useState("Photos");
  const setStatusFilter = (status: any) => {
    setStatus(status);
  };
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ContentView
        navigation={navigation}
        setStatusFilter={setStatusFilter}
        listTab={listTab}
        status={status}
      />
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
  }
}

export default connect(null, mapDispatchToProps)(Content);