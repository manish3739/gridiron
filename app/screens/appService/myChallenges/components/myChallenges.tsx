
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


const MyChallengesView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor:'#ffffff' }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.myChallengesLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.boxTextStyle}>Key Gray</Text>
              <Text style={styles.greyTextStyle}>QB- Ohio- junior</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.boxTextStyle}>11</Text>
              <Text style={styles.greyTextStyle}>Challenges</Text>
            </View>
            <View>
              <Text style={styles.boxTextStyle}>5000</Text>
              <Text style={styles.greyTextStyle}>Total IQ</Text>
            </View>
          </View>

          <View style={{alignItems:'center',paddingTop:verticalScale(20)}}>
            <Text style={[styles.boxTextStyle,{fontSize:verticalScale(19)}]}>IQ Challenges</Text>
          </View>
          <View style={{backgroundColor:'#F8F9FA',paddingTop:verticalScale(20),marginTop:verticalScale(20)}}>
          <Text style={[styles.boxTextStyle,{fontSize:verticalScale(18)}]}>Completed (6)</Text>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyChallengesView;