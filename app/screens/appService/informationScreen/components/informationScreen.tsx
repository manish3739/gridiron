
import React from "react";
// import { connect } from "react-redux";
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import {  RIGHT_ARROW } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";


const InformationScreenView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.informationLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
          <TouchableOpacity onPress={() => navigation.navigate('TermsAndCondition')}  style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.termsAndConditionLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')} style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.privacyPolicyLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FAQScreen')} style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.faqsLabel}</Text>
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

export default InformationScreenView;