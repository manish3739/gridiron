// @ts-ignore
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { USER_ICON } from '../../theme/constantImages';
import { Dropdown, MultiSelect } from './components';
import { verticalScale } from '../../utils/scale';
import { colors } from '../../theme/colors';
import { DimensionsScale } from '../../theme/Dimensions';


interface RNDropDownProps {
  dropDownMainStyle?: any,
  placeholder?: any,
  data_list?: any,
  labelField?: any,
  valueField?: any,
  renderSelectedItem?: any,
  testID?: any,
  isMultiple?: boolean,
  placeHolderMainStyle?: any,
}
const DropDownView = (props: RNDropDownProps) => {

  const [selected, setSelected] = useState([]);
  const { dropDownMainStyle, placeholder, data_list, labelField, valueField, renderSelectedItem, placeHolderMainStyle } = props;
  return (
    <View testID={props.testID} >

      {props.isMultiple &&
        <MultiSelect
          style={[styles.dropdown, dropDownMainStyle]}
          iconStyle={styles.iconStyle}
          placeholderStyle={[styles.placeholderStyle,placeHolderMainStyle]}
          search={true}
          data={data_list}
          // @ts-ignore
          labelField={labelField}
          // @ts-ignore
          valueField={valueField}
          placeholder={placeholder}
          value={selected}
          itemTextStyle={{color:colors.blackColorCode}}
          renderSelectedValues={(item:any) => renderSelectedItem(item)}
          onChange={(item:any) => {
            setSelected(item)
          }}
        /> }
        {!props.isMultiple &&
        <Dropdown
          style={[styles.dropdown, dropDownMainStyle]}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          placeholderStyle={[styles.placeholderStyle,placeHolderMainStyle]}
          search={true}
          data={data_list}
          labelField={labelField}
          valueField={valueField}
          placeholder={placeholder}
          value={selected}
          onChange={(item: any) => {
            console.log("item", item)
            // setSelected(item)
            // renderSelectedItem(item)
          }}
        />
}
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
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#c5ced5',
    width: verticalScale(120)
  },
  selectedTextStyle: {
    fontSize: verticalScale(14),
    color: colors.blackColorCode
  },
  iconStyle: {
    width: 14,
    height: 14,
    tintColor: colors.blackColorCode
  },
  placeholderStyle: {
    color: colors.blackColorCode,
    fontSize: verticalScale(15),
  }
});
export default React.memo(DropDownView)
