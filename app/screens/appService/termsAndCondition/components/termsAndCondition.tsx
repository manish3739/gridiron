
import React from "react";
// import { connect } from "react-redux";
import {  Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import {  RIGHT_ARROW } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";


const TermsAndConditionView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.termsAndConditionLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
         
        </View>
      </View>
    </ScrollView>
  );
};

export default TermsAndConditionView;