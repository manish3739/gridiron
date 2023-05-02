import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";

import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { Text } from "react-native";
import Dropdown from "../../../../components/dropdown";
import Button from "../../../../components/Button";

const GameDetailView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          MainHeadStyle={{ marginTop: verticalScale(40), textAlign: "center" }}
          HeaderText={strings.game8}
          leftHeaderContainer={{ flex: 0.7 }}
          isGoBack={true}
          headerRightText={strings.save}
          headerRightTextStyle={{ color: colors.primaryButtonColor }}
          onPressRightImage={() => navigation.navigate("contentTitle")}
        />
      </View>
      <View style={styles.nameInformation}>
        <View>
          <Text style={styles.name}>{strings.name}</Text>
          <Text style={styles.information}>{strings.information}</Text>
        </View>
        <View>
          <Text style={styles.footbal}>{strings.footbal}</Text>
          <Text style={styles.footbal}>{strings.Quarter}</Text>
        </View>
      </View>
      <View style={styles.secondContain}>
        <Text style={styles.name}>{strings.passing}</Text>
        <View style={styles.passing}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Attempts}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.yards}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Touchdowns}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
        </View>
        <View style={styles.passing2}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Fumbles}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
              marginLeft: verticalScale(10),
            }}
            textLabelStyle={{
              marginLeft: verticalScale(10),
            }}
            dropDownLabelText={strings.FumblesLost}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
        </View>
      </View>
      <View style={[styles.secondContain, { marginTop: verticalScale(10) }]}>
        <Text style={styles.name}>{strings.rushing}</Text>
        <View style={styles.passing}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Attempts}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.yards}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Touchdowns}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
        </View>
        <View style={styles.passing2}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Fumbles}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.28,
              marginTop: 0,
              marginLeft: verticalScale(10),
            }}
            textLabelStyle={{
              marginLeft: verticalScale(10),
            }}
            dropDownLabelText={strings.FumblesLost}
            placeholder={"0"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Button buttonText={strings.saveStats} style={styles.share} />
      </View>
    </View>
  );
};

export default GameDetailView;
