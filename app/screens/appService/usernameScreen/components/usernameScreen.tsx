
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


const UsernameScreenView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.userNameLabel}
            leftImg={true}
            isGoBack={true}
            isRightHeaderText={true}
            headerRightText={strings.saveLabel}
            headerRightTextStyle={styles.headerTextStyle}
            onPressRightImage={()=> navigation.navigate('Account')}
          />
        </View>
        <View style={styles.secondContain}>
        <RNTextInput
            textName={strings.userNameLabel}
            editable={true}
            placeholder="Email"
            keyboardType="default"
            placeholderTextColor="#00000040"
            showRightImage={true}
            containerStyle={{width:'100%'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UsernameScreenView;