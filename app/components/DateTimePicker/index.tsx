import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, Modal } from 'react-native';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
import { DimensionsScale } from '../../theme/Dimensions';
import { colors } from '../../theme/colors';
import { CALENDER_ICON, CLOCK_ICON } from '../../theme/constantImages';
import moment from 'moment';
import { verticalScale } from '../../utils/scale';

interface RNDatePickerProps {
  pickerContainer?: any,
  renderDate?: any,
  renderTime?: any,
  isDatePicker?: any,
  isTimePicker?: any,
}

export default function DateTimePicker(props: RNDatePickerProps) {

  const { pickerContainer, renderDate, renderTime, isDatePicker, isTimePicker } = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date: any) => {
    setDate(date);
    renderTime(date);
    hideDatePicker();
  };
  const handleTimeConfirm = (date: any) => {
    setTime(date);
    renderDate(date);
    hideTimePicker();
  };


  return (
    <>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      {isDatePicker &&
        <View style={[styles.pickerMainContain]}>
          <TouchableOpacity onPress={showDatePicker} style={[styles.pickerContainer, pickerContainer]}>
            <Text style={styles.selectedDateTimeStyle}>{moment(date).format('DD/MM/YYYY')}</Text>
          </TouchableOpacity>
          <Image style={styles.pickerIconStyle} source={CALENDER_ICON} />
        </View>
      }
      {isTimePicker &&
        <View style={[styles.pickerMainContain]}>
          <TouchableOpacity onPress={showTimePicker} style={[styles.pickerContainer, pickerContainer]}>
            <Text style={styles.selectedDateTimeStyle}>{moment(time).format("hh:mm A")}</Text>
          </TouchableOpacity>
          <Image style={styles.pickerIconStyle} source={CLOCK_ICON} />
        </View>
      }
    </>
  );
}
DateTimePicker.propTypes = {

}

const styles = StyleSheet.create({
  pickerMainContain: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    display: 'flex',
  },
  pickerContainer: {
    width: DimensionsScale.width * 0.3,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderColor: colors.commonGreyColor,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedDateTimeStyle: {
    fontSize: verticalScale(16),
    color: colors.secondaryGreyColor
  },
  pickerIconStyle: {
    width: 20,
    height: 20,
    left: 10,
    tintColor: '#4B5C6B'
  },
  modalContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }

});

