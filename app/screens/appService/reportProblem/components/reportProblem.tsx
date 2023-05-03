
import React, { useState, useEffect } from "react";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import { CLOSE_ICON, RIGHT_ARROW, USER_ICON } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import { verticalScale } from "../../../../utils/scale";
import Button from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";


const ReportProblemView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.reportaProblemLabel}
          leftImg={true}
          isGoBack={true}
          isRightHeaderText={true}
          headerRightText={strings.sendLabel}
          headerRightTextStyle={styles.headerTextStyle}
          onPressRightImage={() => navigation.navigate('HelpScreen')}
        />
      </View>
      <View style={styles.secondContain}>
        <RNTextInput
          placeholder={strings.reportProblemLabel}
          editable={true}
          multiline
          numberOfLines={5}
          keyboardType="default"
          placeholderTextColor={colors.commonGreyColor}
          textInputContainer={{
            height: DimensionsScale.height / 2,
            fontSize: verticalScale(16),
            borderRadius: 5,
            textAlignVertical: "top",
            width: "100%",
            backgroundColor: colors.commonWhiteColor,
            color: colors.blackColorCode,
            paddingTop: verticalScale(20)
          }}
        />
      </View>
    </View>
  );
};

export default ReportProblemView;