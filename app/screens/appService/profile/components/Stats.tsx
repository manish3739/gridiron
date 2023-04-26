import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import strings from "../../../../components/locales";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";
import Dropdown from "../../../../components/dropdown";
import { DimensionsScale } from "../../../../theme/Dimensions";

const Stats = (props: any) => {
  const [state, setState]: any = useState(null);
  return (
    <FlatList
      data={[]}
      keyExtractor={(item, index) => `key-${index}`}
      ListHeaderComponent={() => (
        <View>
          <View style={styles.StatsContainer}>
            <View style={{ flexDirection: "row" }}>
              <Dropdown
              dropDownMainStyle={{width:DimensionsScale.width*0.25}}
              dropDownLabelText={strings.season}
              placeholder={strings.season}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
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
              dropDownMainStyle={{width:DimensionsScale.width*0.4}}
              dropDownLabelText={strings.sports}
              placeholder={strings.sports}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "Football",
                    value: 1,
                  },
                  {
                    name: "Cricket",
                    value: 2,
                  },
                ]}
              />
               <Dropdown
              dropDownMainStyle={{width:DimensionsScale.width*0.2}}
              dropDownLabelText={strings.position}
              placeholder={strings.position}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "QB",
                    value: 1,
                  },
                  {
                    name: "",
                    value: 2,
                  },
                ]}
              />
            </View>

            <FlatList
              data={props.data1}
              keyExtractor={(item) => item.name}
              horizontal
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.dataContainer,
                      {
                        backgroundColor: state === item ? "#e0defd" : "#E3E8ED",
                        borderColor:
                          state === item
                            ? colors.primaryButtonColor
                            : "#E3E8ED",
                      },
                    ]}
                    onPress={() => setState(item)}
                  >
                    <Text>{item.Gamename}</Text>
                    <Text>{strings.vs}</Text>
                    <Text>{item.name}</Text>
                    {state !== item ? (
                      <Text style={styles.viewState}>{strings.viewState}</Text>
                    ) : null}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View>
            <View>
              <Text style={styles.passing}>{strings.passing}</Text>
              <FlatList
                data={props.passingData}
                numColumns={4}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.passingContainer}>
                      <Text style={styles.number}>{item.name}</Text>
                      <Text style={styles.passingName}>{item.number}</Text>
                    </View>
                  );
                }}
              />
            </View>
            <View>
              <Text style={styles.passing}>{strings.rushing}</Text>
              <FlatList
                data={props.rushingData}
                numColumns={4}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.passingContainer}>
                      <Text style={styles.number}>{item.name}</Text>
                      <Text style={styles.passingName}>{item.number}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <View
            style={[
              styles.thirdContain,
              {
                marginTop: verticalScale(20),
                marginBottom: verticalScale(20),
                backgroundColor: "#eee",
                paddingTop: verticalScale(20),
              },
            ]}
          >
            <Button buttonText={strings.addNew} style={styles.addNew} />
          </View>
        </View>
      )}
      renderItem={({ item, index }) => <></>}
    />
  );
};

export default Stats;
