
import React from "react";
// import { connect } from "react-redux";
import { ScrollView, View } from 'react-native';
import Header from "../../../../components/Header";
import {  RIGHT_ARROW } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


const FAQScreenView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.faqsLabel}
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

export default FAQScreenView;