
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import {
  DRAWER_ICON,
  GALLERY_ICON,
  NO_IMAGE_PROFILE,
  VIDEO_ICON,
} from "../../../../theme/constantImages";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { FlatList } from "react-native-gesture-handler";


const ProfileView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <><View style={styles.firstContain}>
      <Header
        noMiddleLabel={true}
        leftImg={false}
        RightImage={DRAWER_ICON}
        isLeftHeaderText={true}
        leftHeaderContainer={{ flex: 2 }}
        HeaderMiddleTxt={{ flex: 3 }}
        leftHeaderText={"Test" + " " + "verified"}
        rightImageStyle={{ tintColor: "#8B99A5" }}
        onPressRightImage={() => props.navigation.navigate("Settings")} />
    </View><View style={styles.secondContain}>
        <View style={{ alignItems: "center" }}>
          <Image
            resizeMode="contain"
            style={styles.noProfile}
            source={NO_IMAGE_PROFILE} />
          <Text style={styles.name}>{strings.name}</Text>
          <Text>{strings.information}</Text>
        </View>
        <View style={styles.button}>
          <Button
            buttonText={strings.editProfile}
            onPress={() => { }}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"} />
          <Button
            buttonText={strings.shareProfile}
            onPress={() => { }}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"} />
        </View>
      </View></>
  );
};

export default ProfileView;