import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../../components/Header";
import styles from "./styles";
import {
  CLOSE_ICON,
  GALLERY_ICON,
  RIGHT_ARROW,
  USER_ICON,
} from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import { verticalScale } from "../../../../utils/scale";
import Button from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";

const CompletedChallengesView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={props?.data?.challengeDetail}
          leftImg={true}
          isGoBack={true}
        />
      </View>
      <View style={styles.secondContain}>
        <View style={styles.galleryContainer}>
          <Image source={GALLERY_ICON} style={styles.gallery} />
        </View>
        <Text style={styles.testText}>{strings.testText}</Text>
        <View style={styles.galleryContainer1}>
          <Text style={styles.details}>{strings.textDetails}</Text>
          <Text style={styles.point}>{strings.points}</Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Button buttonText={strings.beginText} />
      </View>
    </View>
  );
};

export default CompletedChallengesView;
