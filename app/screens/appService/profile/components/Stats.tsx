import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import strings from "../../../../components/locales";
import { ScrollView } from "react-native";
import Button from "../../../../components/Button";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const Stats = (props: any) => {
  const [state, setState]: any = useState(null);
  return (
    <FlatList
  data={[]}
  keyExtractor={(item, index) => `key-${index}`}
  ListHeaderComponent={() => (
    <View
     >
      <View style={styles.StatsContainer}>
        <View style={{ flexDirection: "row" }}>
         
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
                      state === item ? colors.primaryButtonColor : "#E3E8ED",
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
  
  renderItem={({ item, index}) => (
    <>
    </>
  )}
/>
   
  );
};

export default Stats;
