import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StatusBar, View } from "react-native";
import HomeView from "./components/home";
import * as homeActions from "../../../redux/actions/homeActions";

const Home = (props: any) => {
  useEffect(() => {
    handleHomeData();
  }, []);

  function handleHomeData() {
    props.categories(
      (res: any) => geCategoriesSuccessCallBack(res),
      (error: any) => getCategoriesFailureCallBack(error)
    );
  }
  function geCategoriesSuccessCallBack(params: any) {
    console.log("geCategoriesSuccessCallBack:", params);
  }
  function getCategoriesFailureCallBack(params: any) {
    console.log("getCategoriesFailureCallBack:", params);
  }

  const data1 = [
    {
      Gamename: "Game 4 vs. Cleveland HS",
      date: "2/15/2023",
      stats: "View Stats",
      id: 1,
    },
    {
      Gamename: "Game 5 vs. Cleveland HS",
      date: "2/24/2023",
      stats: "View Stats",
      id: 1,
    },
    {
      Gamename: "Game 6 vs. Cleveland HS",
      date: "2/1/2023",
      stats: "View Stats",
      id: 1,
    },
    {
      Gamename: "Game 7 vs. Cleveland HS",
      date: "2/15/2023",
      stats: "View Stats",
      id: 1,
    },
    {
      Gamename: "Game 8 vs. Cleveland HS",
      date: "2/15/2023",
      stats: "View Stats",
      id: 1,
    },
  ];

  const data = [
    {
      name: "40 Yard Dash",
      nameText: "(seconds)",
      number: 4.5,
      id: 1,
    },
    {
      nameText: "(lbs)",
      name: "Branch Press",
      number: 350,
      id: 1,
    },
    {
      nameText: "(lbs)",
      name: "Squat",
      number: 450,
      id: 1,
    },
    {
      nameText: "(in)",
      name: "Vertical",
      number: 18.3,
      id: 1,
    },
  ];

  const challenges = [
    {
      name: "Quaterback Test",
      Date: "Date: 3/15/23",
      score: "600/1200 points",
      view: "View",
      id: 1,
    },
    {
      name: "Quaterback Test",
      Date: "Date: 3/15/23",
      score: "600/1200 points",
      view: "View",
      id: 1,
    },
    {
      name: "Quaterback Test",
      Date: "Date: 3/15/23",
      score: "600/1200 points",
      view: "View",
      id: 1,
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <HomeView data1={data1} data={data} challenges={challenges} />
    </View>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    categories: (data: any, successCallBack: any, failureCallBack: any) =>
      dispatch(
        homeActions.getCategories(data, successCallBack, failureCallBack)
      ),
  };
};

export default connect(null, mapDispatchToProps)(Home);
