import React from "react";
// import { connect } from "react-redux";
import {
  Dimensions,
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
  GALLERY_ICON,
  NO_IMAGE_PROFILE,
  VIDEO_ICON,
} from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ContentView = (props: any) => {
  const data = [
    { id: 'a', value: 'A' },
    { id: 'b', value: 'B' },
    { id: 'c', value: 'C' },
    { id: 'd', value: 'D' },
    { id: 'e', value: 'E' },
    { id: 'f', value: 'F' },
    { id: 'f', value: 'G' },
    { id: 'f', value: 'H' },
    { id: 'f', value: 'I' },
  ];
  const numColumns = 3;
  const size = Dimensions.get('window').width / numColumns;
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
          handleBackButton={() => {}}
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
            source={NO_IMAGE_PROFILE}
          />
          <Text style={styles.name}>{strings.name}</Text>
          <Text>{strings.information}</Text>
        </View>

        <View style={styles.button}>
          <Button
            buttonText={strings.editProfile}
            onPress={() => navigation.navigate("editProfile")}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"}
          />
          <Button
            buttonText={strings.shareProfile}
            onPress={() => { }}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"}
          />
        </View>

        <View style={{ marginTop: verticalScale(10) }}>
          <View
            style={styles.list}
          >
            {props.listTab.map((e: any, index: any) => {
              return (
                <TouchableOpacity key={index} onPress={() => props.setStatusFilter(e.status)}
                  style={[styles.btnTab, props.status === e.status && styles.btnTabActive]}>

                  <Text style={{ fontSize: verticalScale(14), color: props.status === e.status ? colors.commonThemeColor : colors.blackColorCode }}>{e.status}</Text>
                </TouchableOpacity>
              )
            }
            )}
          </View>
          {props.status === 'Photos' ? (
            <View style={styles.gridMainContainer}>
              <FlatList
                data={data}
                keyExtractor={(_item, index) => `_keys${index.toString()}`}
                contentContainerStyle={{flexGrow:1}}
                renderItem={({ item }) => (
                  <View
                    style={[styles.mainContain,{ width: size, height: size + verticalScale(10) }]}>
                      <Image resizeMode="contain" style={styles.videoIconStyle} source={GALLERY_ICON} />
                  </View>
                )}
                numColumns={numColumns}
              />
            </View>
          ) : props.status === 'Videos' ?
            (
              <View style={styles.gridMainContainer}>
              <FlatList
                contentContainerStyle={{flexGrow:1}}
                data={data}
                keyExtractor={(_item, index) => `_keys${index.toString()}`}
                renderItem={({ item }) => (
                  <View
                    style={[styles.mainContain,{ width: size, height: size + verticalScale(10)}]}>
                      <Image resizeMode="contain" style={styles.videoIconStyle} source={VIDEO_ICON} />
                  </View>
                )}
                numColumns={numColumns}
              />
            </View>
            )
            : null}
        </View>
      </View>
      <View style={styles.thirdContain}>
        <Button
          buttonText={strings.addNew}
          onPress={() => props.navigation.navigate('newContent')}
          style={styles.addNew}
        />
      </View>
    </View>
  );
};

export default ContentView;