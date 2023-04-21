
import React from "react";
// import { connect } from "react-redux";
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import {  RIGHT_ARROW } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";


const HelpScreenView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.helpText}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
          <TouchableOpacity onPress={() => navigation.navigate('ReportProblem')}  style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.reportaProblemLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.contactUsLabel}</Text>
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

export default HelpScreenView;