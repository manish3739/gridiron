
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


const AccountView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.accountLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
          <TouchableOpacity onPress={() => navigation.navigate('Email')} style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.emailLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Email')} style={styles.optionContainer}>

            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.userNameLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Password')} style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.passwordLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Membership')} style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.membershipLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('VerifyAccount')} style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.verifyMyAccountLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <View style={styles.optionFirstContainer}>
              <Text style={styles.optionLabelStyle}>{strings.downloadMyDataLabel}</Text>
            </View>
            <View style={styles.optionSecondContainer}>
              <Image resizeMode="contain" style={styles.optionImage} source={RIGHT_ARROW} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.thirdContain}>
          <Button
            buttonText={strings.deleteAccountLabel}
            onPress={() => {}}
            style={{ borderColor: colors.secondaryButtonColor, marginTop: 20 }}
            buttonLabelStyle={{ color: colors.secondaryButtonColor }}
            buttonType={"tertiary"}
          />
        </View>

      </View>
    </ScrollView>
  );
};

export default AccountView;