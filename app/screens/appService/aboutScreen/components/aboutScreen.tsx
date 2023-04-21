
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


const AboutScreenView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.aboutLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
        <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.privacyPolicyLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.termsOfUseLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreenView;