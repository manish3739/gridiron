import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import strings from "../../../../components/locales";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";
import Dropdown from "../../../../components/dropdown";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { useNavigation } from "@react-navigation/native";

const Stats = (props: any) => {
  const [state, setState]: any = useState(null);
  const navigation: any = useNavigation();

  return (
    <FlatList
      data={[1, 2, 3]}
      keyExtractor={(_item, index) => `_keys${index.toString()}`}
      ListHeaderComponent={() => (
        <View>
          <View style={styles.StatsContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.25 }}
                dropDownLabelText={strings.season}
                placeholder={strings.season}
                renderSelectedItem={(value: any) =>
                  console.log("value", value)
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
                dropDownMainStyle={{ width: DimensionsScale.width * 0.4 }}
                dropDownLabelText={strings.sports}
                placeholder={strings.sports}
                renderSelectedItem={(value: any) =>
                  console.log("value", value)
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
                dropDownMainStyle={{ width: DimensionsScale.width * 0.2 }}
                dropDownLabelText={strings.position}
                placeholder={'QB'}
                renderSelectedItem={(value: any) =>
                  console.log("value", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "QB",
                    value: 1,
                  },
                  {
                    name: "QB-1",
                    value: 2,
                  },
                ]}
              />
            </View>

            <FlatList
              data={props.data1}
              horizontal
              keyExtractor={(_item, index) => `_key${index.toString()}`}
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
                    <Text style={styles.Gamename}>{item.Gamename}</Text>
                    <Text style={styles.vs}>{strings.vs}</Text>
                    <Text style={styles.name1}>{item.name}</Text>
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
                // @ts-ignore
                listKey={(_item: any, index: any) => `_key${index.toString()}`}
                keyExtractor={(_item, index) => `_keys${index.toString()}`}
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
                // @ts-ignore
                listKey={(_item: any, index: any) => `_key${index.toString()}`}
                keyExtractor={(_item, index) => `_keys${index.toString()}`}
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
            <Button buttonText={strings.addNew} style={styles.addNew}
              onPress={() => navigation.navigate('newGame')}

            />
          </View>
        </View>
      )}
      renderItem={({ item, index }) => <></>}
    />
  );
};

export default Stats;
