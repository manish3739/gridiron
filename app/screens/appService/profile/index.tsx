import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ProfileView from "./components/profile";
import { useNavigation } from "@react-navigation/native";
import Stats from "./components/Stats";

const Profile = (props: any) => {
  const navigation: any = useNavigation();
  const [status, setStatus] = useState("Stats");
  const setStatusFilter = (status: any) => {
    setStatus(status);
  };
  
  const listTab = [
    {
      status: "Stats",
    },
    {
      status: "Training",
    },
    {
      status: "Info",
    },
  ];
  const data = [
    {
      number: "4.50",
      name: "40 Yard Dash",
      id: 1,
    },
    {
      number: "350",
      nameText:"(lbs)",
      name: "Branch Press",
      id: 1,
    },
    {
      number: "450",
      nameText:"(lbs)",
      name: "Squat",
      id: 1,
    },
    {
      number: "36",
      nameText:"(in)",
      name: "Vertical",
      id: 1,
    },
  ];
  const rushingData = [
    {
      number: "102",
      name: "At",
      id: 1,
    },
    {
      number: "47",
      name: "COMP",
      id: 1,
    },
    {
      number: "03",
      name: "PCT",
      id: 1,
    },
    {
      number: "78",
      name: "RATE",
      id: 1,
    },
  ];

  const data1 = [
    {
      Gamename: "Game 1",
      name: "Cleveland",
      id: 1,
    },
    {
      Gamename: "Game 2",
      name: "Cleveland",
      id: 1,
    },
    {
      Gamename: "Game 3",
      name: "Cleveland",
      id: 1,
    },
    {
      Gamename: "Game 4",
      name: "Cleveland",
      id: 1,
    },
  ];

  const passingData = [
    {
      number: "102",
      name: "At",
      id: 1,
    },
    {
      number: "47",
      name: "COMP",
      id: 1,
    },
    {
      number: "03",
      name: "PCT",
      id: 1,
    },
    {
      number: "78",
      name: "RATE",
      id: 1,
    },
    {
      number: "102",
      name: "At",
      id: 1,
    },
    {
      number: "47",
      name: "COMP",
      id: 1,
    },
    {
      number: "03",
      name: "PCT",
      id: 1,
    },
    {
      number: "78",
      name: "RATE",
      id: 1,
    },
  ];
  
  

  return (
    <View style={{ flex: 1 }}>
      <ProfileView
        navigation={navigation}
        status={status}
        setStatusFilter={setStatusFilter}
        listTab={listTab}
        data={data}
        data1={data1}
        rushingData={rushingData}
        passingData={passingData}
        
      />
     
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // login: (data, successCallBack, failureCallBack) => dispatch(user.loginUser(data, successCallBack, failureCallBack)),
  };
};

export default connect(null, mapDispatchToProps)(Profile);
