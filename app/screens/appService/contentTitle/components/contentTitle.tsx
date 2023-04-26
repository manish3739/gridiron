import React, { useState, useEffect } from "react";
import { Image, ScrollView, View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import {
  DRAWER_ICON,
  NO_IMAGE_PROFILE,
} from "../../../../theme/constantImages";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";

const ContentTitleView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.ContectTitle}
          leftHeaderContainer={{ flex: 0.7 }}
          leftImg={true}
          isGoBack={true}
          isRightHeaderText={true}
          headerRightText={strings.edit}
          headerRightTextStyle={{ color: colors.primaryButtonColor }}
          onPressRightImage={() =>
            navigation.navigate("contentTitleSave")
          }
        />
      </View>
      <View style={styles.secondContain}>
        <Image
          style={styles.noProfile}
          source={NO_IMAGE_PROFILE}
        />
        <RNTextInput
          textName={strings.date}
          editable={true}
          keyboardType="default"
          showLeftImage={true}
          showRightImage={true}
          placeholderTextColor="#00000040"
          multiline={true}
          numberOfLines={5}
          textInputContainer={{ fontSize: 14, height: DimensionsScale.height / 5, paddingTop: 15 }}
        />
      </View>

    </View>
  );
};

export default ContentTitleView;