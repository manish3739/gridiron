import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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

const NewContentView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.NewContect}
            leftHeaderContainer={{ flex: 0.7 }}
            leftImg={true}
            isGoBack={true}
            isRightHeaderText={true}
            headerRightText={strings.save}
            headerRightTextStyle={{ color: colors.primaryButtonColor }}
            onPressRightImage={() => navigation.navigate('ContentTitleView')}
          />
        </View>
        <View style={styles.secondContain}>
          <View style={{}}>
            <Image
              resizeMode="contain"
              style={styles.noProfile}
              source={NO_IMAGE_PROFILE}
            />
          </View>
        </View>

        <View style={{ flex: 4, alignItems:"center" }}>
        <RNTextInput
        textName={strings.title}
        editable={true}
        keyboardType="default"
        showLeftImage={true}
        showRightImage={true}
        placeholderTextColor="#00000040"
        textInputContainer={{height:50}}
      />
       <RNTextInput
        textName={strings.title}
        editable={true}
        keyboardType="default"
        showLeftImage={true}
        showRightImage={true}
        placeholderTextColor="#00000040"
        textInputContainer={{height:150}}
      />
        </View>

        <View style={styles.thirdContain}></View>
      </View>
    </ScrollView>
  );
};

export default NewContentView;
