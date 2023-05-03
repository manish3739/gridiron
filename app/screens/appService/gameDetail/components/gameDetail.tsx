import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import strings from "../../../../components/locales";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { Text } from "react-native";
import Dropdown from "../../../../components/dropdown";
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";

const GameDetailView = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          MainHeadStyle={{ paddingTop: verticalScale(30) }}
          HeaderText={strings.game8}
          isGoBack={true}
        />
      </View>
      <View style={styles.secondContain}>
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
        <View style={styles.passingContainer}>
          <Text style={styles.name}>{strings.passing}</Text>
          <View style={styles.passing}>
            <View style={{ flex: 2 }}>
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
            </View>
            <View style={{ flex: 2 }}>
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
            </View>
            <View style={{ flex: 2 }}>
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
          </View>
          <View style={styles.passing2}>
            <View style={{ flex: 2 }}>
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
            </View>
            <View style={{ flex: 4 }}>
              <Dropdown
                dropDownMainStyle={{
                  width: DimensionsScale.width * 0.28,
                  marginTop: 0,
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
        </View>
        <View style={styles.rushingContainer}>
          <Text style={styles.name}>{strings.rushing}</Text>
          <View style={styles.passing}>
            <View style={{ flex: 2 }}>
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
            </View>
            <View style={{ flex: 2 }}>
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
            </View>
            <View style={{ flex: 2 }}>
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
          </View>
          <View style={styles.passing2}>
            <View style={{ flex: 2 }}>
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
            </View>
            <View style={{ flex: 4 }}>
              <Dropdown
                dropDownMainStyle={{
                  width: DimensionsScale.width * 0.28,
                  marginTop: 0,
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
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Button buttonText={strings.saveStats} style={styles.share} />
      </View>
    </View>
  );
};

export default GameDetailView;
