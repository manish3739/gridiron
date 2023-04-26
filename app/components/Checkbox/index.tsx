import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, FlatList, TextStyle } from 'react-native';
import { CHECKED_BOX, UN_CHECKED_BOX } from '../../theme/constantImages';
import { verticalScale } from '../../utils/scale';
import { colors } from '../../theme/colors';

type DataType = {
    label: string,
    isSelected: boolean,
    index: number,
}

interface CheckBoxProps {
    data: DataType[];
    returnData: (value: DataType[]) => void
    isHorizontal?: boolean
    textStyle?: TextStyle
    isMultiple?: boolean
    isError?: any
    error?: string
}
const CheckBox = (props: CheckBoxProps) => {
    let horizontal = props?.isHorizontal ? props?.isHorizontal : false;
    function onPressCheckBox(e: any, i: any) {
        let itemsArray = [...props.data];
        if (props?.isMultiple) {
            itemsArray[i].index = i;
            itemsArray[i].isSelected = !itemsArray[i].isSelected;
            props.returnData(itemsArray)
        } else {
            itemsArray.map((item, index) => {
                if (index == i) {
                    item.isSelected = true;
                    item.index = index;
                } else {
                    item.isSelected = false;
                    item.index = index;
                }
                return item;
            })
            props.returnData(itemsArray)
        }
    };
    return (
        <>
          <FlatList
            data={props?.data}
            contentContainerStyle={[horizontal ? styles.contentHorizontalStyle : styles.contentStyle]}
            horizontal={horizontal}
            renderItem={(val: any) => {
                return (
                    <>
                        <View style={styles.itemContainer}>
                            <TouchableOpacity
                                style={{ padding: 5 }}
                                onPress={() => onPressCheckBox(val?.item, val?.index)}
                            >
                                <Image style={styles.checkBoxStyle} resizeMode='contain' source={val?.item?.isSelected ? CHECKED_BOX : UN_CHECKED_BOX} />
                            </TouchableOpacity>
                            <Text style={[styles.itemLabelStyle, props.textStyle]}>{val?.item?.label}</Text>
                        </View>
                    </>
                )
            }}
        />
          {props.isError &&
            <Text style={styles.error}>{props?.error}</Text>}
        </>
    );
};
const styles = StyleSheet.create({
    checkBoxStyle: {
        height: verticalScale(22),
        width: verticalScale(22),
        tintColor: colors.secondaryGreyColor
    },
    error: {
        fontSize: verticalScale(15),
        color: "red",
        marginLeft: 7,
        marginTop: 4,
    },
    itemLabelStyle: {
        fontSize: verticalScale(16)
    },
    contentHorizontalStyle: {
        justifyContent: 'space-between',
        paddingHorizontal: verticalScale(20),
        paddingVertical: verticalScale(20)
    },
    contentStyle: {
        paddingHorizontal: verticalScale(0),
        paddingVertical: verticalScale(10)
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default React.memo(CheckBox);