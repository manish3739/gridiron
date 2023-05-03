import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { FlatList } from "react-native";
import strings from "../../../../components/locales";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import Dropdown from "../../../../components/dropdown";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { useNavigation } from "@react-navigation/native";

const Training = (props: any) => {
  const [state, setState]: any = useState(null);
  const navigation: any = useNavigation();


  return (
    <>
      <FlatList
         data={[1,2,3]}
         keyExtractor={(_item, index) => `_key${index.toString()}`}
          ListHeaderComponent={() => (
          <View>
            <View style={styles.TrainerContainer}>
              <Dropdown
                textLabelStyle={{ marginLeft: 14 }}
                dropDownMainStyle={{ width: DimensionsScale.width * 0.25, marginLeft: 14 }}
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
              <FlatList
                data={props.data}
                numColumns={2}
                keyExtractor={(_item, index) => `_key${index.toString()}`}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.view}>
                      <TouchableOpacity
                        style={[
                          styles.trainerFlatlist,
                          {
                            borderColor: state === item ? "#ccc" : "#fff",
                            borderWidth: 1,
                          },
                        ]}
                        onPress={() => setState(item)}
                      >
                        <View>
                          <Text style={styles.trainerName}>{item.name}</Text>
                          <Text style={styles.nametext}>{item.nameText}</Text>
                        </View>

                        <Text style={styles.trainerNumber}>{item.number}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
              <View
                style={[
                  styles.thirdContain,
                  {
                   marginVertical: verticalScale(20)
                  },
                ]}
              >
                <Button buttonText={strings.addNew} style={styles.addNew}
                onPress={() => navigation.navigate('newTraining')}
                />
              </View>
            </View>
          </View>
        )}
        renderItem={({ item, index }) => <></>}
      />
    </>
  );
};

export default Training;
