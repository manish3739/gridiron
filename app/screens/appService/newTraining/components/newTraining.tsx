import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import Dropdown from "../../../../components/dropdown";
import Button from "../../../../components/Button";

const NewTrainingView = (props: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          leftHeaderContainer={{ paddingTop: verticalScale(15) }}
          HeaderText={""}
          isGoBack={true}
        />
        <Text style={styles.training}>{strings.newTraining}</Text>
      </View>
      <View style={styles.secondContain}>
        <FlatList
          data={props.data}
          numColumns={2}
          keyExtractor={(_item, index) => `_keys${index.toString()}`}
          renderItem={({ item }) => {
            return (
              <View style={styles.view}>
                <TouchableOpacity style={[styles.trainerFlatlist]}>
                  <Text style={styles.trainerName}>{item.name}</Text>
                  <Text style={styles.nametext}>{item.nameText}</Text>
                  <Dropdown
                    dropDownMainStyle={{
                      width: DimensionsScale.width * 0.25,
                      marginTop: 0,
                    }}
                    textLabelStyle={{ marginTop: 0 }}
                    placeholder={""}
                    renderSelectedItem={(value: any) =>
                      console.log("value", value)
                    }
                    labelField={"name"}
                    data_list={[
                      {
                        name: "0",
                        value: 1,
                      },
                      {
                        name: "1",
                        value: 2,
                      },
                    ]}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.thirdContainer}>
        <RNTextInput
          placeholder={strings.trainingNotes}
          editable={true}
          multiline
          numberOfLines={5}
          keyboardType="default"
          placeholderTextColor={colors.commonGreyColor}
          textInputContainer={{
            height: DimensionsScale.height / 4,
            fontSize: verticalScale(16),
            borderRadius: 5,
            justifyContent: "flex-start",
            textAlignVertical: "top",
            width: "100%",
            backgroundColor: colors.commonWhiteColor,
            color: colors.commonGreyColor,
          }}
        />
        <Button buttonText={strings.saveTraining} style={styles.saveTraining} />
      </View>
    </View>
  );
};

export default NewTrainingView;
