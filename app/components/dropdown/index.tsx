import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { USER_ICON } from '../../theme/constantImages';
import { Dropdown } from './components';
import { verticalScale } from '../../utils/scale';
import { colors } from '../../theme/colors';
import { DimensionsScale } from '../../theme/Dimensions';

const DropDownView = (props: any) => {
 
  const [selected, setSelected] = useState([]);
   const { dropDownMainStyle, placeholder, data_list, labelField, valueField, renderSelectedItem } = props;
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
          setSelected(item)
          renderSelectedItem(item)
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
  selected: [],
};

const styles = StyleSheet.create({
  dropdown: {
    width: DimensionsScale.width*0.3,
    paddingHorizontal:10,
    backgroundColor: 'transparent',
    borderColor:colors.commonGreyColor,
    borderWidth:2,
    borderRadius:5
  },
  selectedTextStyle: {
    fontSize: verticalScale(13),
    color: colors.blackColorCode
  },
  iconStyle: {
    width: 11,
    height: 11,
    tintColor:colors.blackColorCode
  },
});
export default React.memo(DropDownView)
