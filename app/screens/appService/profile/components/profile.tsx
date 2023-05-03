import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../../../components/Header";
import styles from "./styles";
import {
  DRAWER_ICON,
  NO_IMAGE_PROFILE,
} from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import Stats from "./Stats";
import Training from "./Training";
import About from "./About";
import { useNavigation } from "@react-navigation/native";

const ProfileView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          noMiddleLabel={true}
          leftImg={false}
          RightImage={DRAWER_ICON}
          isLeftHeaderText={true}
          leftHeaderContainer={{ flex: 2 }}
          HeaderMiddleTxt={{ flex: 3 }}
          leftHeaderText={"Test" + " " + "verified"}
          rightImageStyle={{ tintColor: "#8B99A5" }}
          onPressRightImage={() => props.navigation.navigate("Settings")}
        />
      </View>
      <View style={styles.secondContain}>
        <View style={{ alignItems: "center" }}>
          <Image
            resizeMode="contain"
            style={styles.noProfile}
            source={NO_IMAGE_PROFILE} />
          <Text style={styles.name}>{strings.name}</Text>
          <Text>{strings.information}</Text>
          <Text style={styles.verify}>{strings.verify}</Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate("editProfile")}
            buttonText={strings.editProfile}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"}
          />
          <Button
            buttonText={strings.shareProfile}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"}
          />
        </View>
      </View>
      <View style={styles.listTab}>
        <View style={styles.list}>
          {props?.listTab.map((e: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => props.setStatusFilter(e.status)}
                style={[
                  styles.btnTab,
                  props.status === e.status && styles.btnTabActive,
                ]}
              >
                <Text
                  style={{
                    fontSize: verticalScale(14),
                    color:
                      props.status === e.status
                        ? colors.commonThemeColor
                        : colors.blackColorCode,
                  }}
                >
                  {e.status}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {props.status === "Stats" ? (
          <View style={styles.container}>
            <Stats
              data1={props.data1}
              passingData={props.passingData}
              rushingData={props.rushingData}
            />
          </View>
        ) : props.status === "Training" ? (
          <View style={styles.container}>
            <Training data={props.data} />
          </View>
        ) : (
          <View style={styles.container}>
            <About />
          </View>
        )}
      </View>
    </View>
  );
};

export default ProfileView;
