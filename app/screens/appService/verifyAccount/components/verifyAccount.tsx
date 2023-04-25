
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import { CLOSE_ICON, RIGHT_ARROW, USER_ICON } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import { verticalScale } from "../../../../utils/scale";
import Button from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";


const VerifyAccountView = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.verifyMyAccountLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
        <Text style={styles.descprtnTextLabel}>To verify your account, you will need to upload (1)
          or more official school documents showing your name and school.
          Such as, School ID, report card, letter from the school.
        </Text>
        <Button
            buttonText={strings.uploadPhotoLabel}
            style={{ borderColor: colors.commonThemeColor, marginTop: 20, alignSelf:'center' }}
            buttonLabelStyle={{ color: colors.commonThemeColor }}
            buttonType={"tertiary"}
          />
            <Text style={styles.pleaseAllowTextStyle}>
              {strings.pleaseAllowBusinessDays}
            </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerifyAccountView;