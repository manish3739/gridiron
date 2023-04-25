import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { USER_ICON } from '../../theme/constantImages';
import { Dropdown } from './components';
import { verticalScale } from '../../utils/scale';
import { colors } from '../../theme/colors';

const DropDownView = (props: any) => {
 
  const [selected, setSelected] = useState([]);
   const { dropDownMainStyle, placeholder, data_list, labelField, valueField } = props;
  return (
    <View testID={props.testID} >
      <Dropdown
        style={[styles.dropdown,dropDownMainStyle]}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        placeholderStyle={{color:colors.blackColorCode}}
        search={false}
        data={data_list}
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={selected}
        onChange={(item: any) => {
          setSelected(item);
        }}
      />
    </View>
  )
}
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
];
DropDownView.defaultProps = {
  placeholder: "Select item",
  data_list: data,
  labelField: "label",
  valueField: "value",
};

const styles = StyleSheet.create({
  dropdown: {
    width: 90,
    paddingHorizontal:10,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderWidth:0.5,
    borderRadius:5
  },
  selectedTextStyle: {
    fontSize: verticalScale(13),
    color: colors.blackColorCode
  },
  iconStyle: {
    width: 12,
    height: 12,
    tintColor:colors.blackColorCode
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
export default React.memo(DropDownView)
