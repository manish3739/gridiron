import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Image, StyleSheet } from "react-native";
import { DimensionsScale } from "../../theme/Dimensions";
import { colors } from "../../theme/colors";
import { View } from "react-native";
import { Text } from "react-native";

interface Props {
  data?: any;
  label: string;
  btnlabelStyle?: any
}
const DropDown = ({ data, label, btnlabelStyle}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle]}>{label}</Text>
      <SelectDropdown
        buttonStyle={[styles.btnStyle, btnlabelStyle]}
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
         renderDropdownIcon={ () => (
            <Text>abd</Text>
           
         )
            
         }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  btnStyle: {
    borderWidth: 1,
    width: DimensionsScale.width * 0.25,
    borderColor: colors.commonGreyColor,
    height:DimensionsScale.height*0.05
  },
  textStyle: {
    fontWeight: "bold",
  },
});
export default React.memo(DropDown);
