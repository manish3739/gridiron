
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { StatusBar, Text, View } from 'react-native';
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import Header from "../../../../components/Header";
import { HEADER_BACK_ICON } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";

const HomeView = (props: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >

      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Header />
      </View>

      <View style={{ flex: 5, justifyContent: 'center', width: '100%', alignItems: 'center' }}>
      <AnimatedProgress
                value={20}
                max={100}
                activeColor={'#56d1bf'}
                backgroundColor={"#c4c2c2"}
                width={DimensionsScale.width*0.9}
                style={{marginVertical:10}}
                height={15}
              />
        <Button
          buttonText={strings.continue}
          style={{ borderColor: colors.commonThemeColor }}
          buttonLabelStyle={{ color: colors.commonThemeColor }}
          buttonType={"tertiary"}
        />
        <Button
          buttonText={strings.continue}
          style={{ borderColor: colors.secondaryButtonColor, marginTop: 20 }}
          buttonLabelStyle={{ color: colors.secondaryButtonColor }}
          buttonType={"tertiary"}
        />

       

        <RNTextInput
          placeholder={"Password"}
          keyboardType="default"
        />
      </View>
    </View>
  );
};

export default HomeView;