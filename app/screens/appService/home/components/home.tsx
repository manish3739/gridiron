import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../../../../components/Header";
import {
  DRAWER_ICON,
  GALLERY_ICON,
  INFORMATION_ICON,
  NO_IMAGE_PROFILE,
  SEARCH_ICON,
  VOLUME_ICON,
} from "../../../../theme/constantImages";
import styles from "./styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { verticalScale } from "../../../../utils/scale";
import { colors } from "../../../../theme/colors";
import strings from "../../../../components/locales";
import { FlatList } from "react-native";
import Button from "../../../../components/Button";

const HomeView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <FlatList
        // @ts-ignore
        renderItem={() => { <></> }}
        data={[1, 2, 3, 4]}
        keyExtractor={(_item, index) => index.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.firstContain}>
                <Header
                  noMiddleLabel={true}
                  leftImg={false}
                  RightImage={INFORMATION_ICON}
                  isLeftHeaderText={true}
                  isGoBack={false}
                  leftHeaderText={"Gridiron Stat"}
                  handleBackButton={() => { }}
                  leftHeaderContainer={{ flex: 2 }}
                  HeaderMiddleTxt={{ flex: 3 }}
                  rightImageStyle={{ tintColor: "#8B99A5" }}
                  onPressRightImage={() => navigation.navigate("Account")} />
                <RNTextInput
                  leftIconStyle={{
                    top: 30,
                    marginLeft: verticalScale(10),
                    tintColor: colors.commonGreyColor,
                  }}
                  textStylelabel={{ paddingVertical: 0 }}
                  editable={true}
                  keyboardType="default"
                  showLeftImage={true}
                  placeholderTextColor={colors.commonGreyColor}
                  textInputContainer={{
                    paddingVertical: verticalScale(15),
                    fontSize: verticalScale(16),
                    paddingLeft: verticalScale(45),
                  }}
                  leftImage={SEARCH_ICON}
                  placeholder={strings.search} />
                <View
                  style={[
                    styles.lineStyle,
                    {
                      marginBottom: verticalScale(15),
                    },
                  ]} />
              </View>
              <View style={styles.secondContain}>
                <Header
                  noMiddleLabel={true}
                  leftImg={false}
                  RightImage={DRAWER_ICON}
                  isLeftHeaderText={true}
                  leftHeaderContainer={{ flex: 2 }}
                  handleBackButton={() => { }}
                  HeaderMiddleTxt={{ flex: 3 }}
                  leftHeaderText={"Test" + " " + "verified"}
                  rightImageStyle={{ tintColor: "#8B99A5" }}
                  onPressRightImage={() => navigation.navigate("Settings")} />
                <View style={{ alignItems: "center" }}>
                  <Image
                    resizeMode="contain"
                    style={styles.noProfile}
                    source={NO_IMAGE_PROFILE} />
                  <Text style={styles.name}>{strings.name}</Text>
                  <Text>{strings.information}</Text>
                  <Text style={styles.verify}>{strings.verify}</Text>
                </View>
                <View
                  style={[
                    styles.lineStyle,
                    { marginTop: verticalScale(35), marginBottom: verticalScale(15) },
                  ]} />
              </View><View style={styles.thirdContain}>
                <View style={styles.thirdContainerStyle}>
                  <Text style={styles.games}>{strings.recentGames}</Text>
                  <View style={styles.recentGames}>
                    <Image
                      resizeMode="contain"
                      style={styles.image}
                      source={VOLUME_ICON} />
                    <Text style={styles.Stats}>{strings.Stats}</Text>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={props.data1}
                      // @ts-ignore
                listKey={(_item: any, index: any) => `_key${index.toString()}`}
                    keyExtractor={(_item, index) => `_key${index.toString()}`}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity style={styles.gamesFlatlist}>
                          <Text style={styles.gameName}>{item.Gamename}</Text>
                          <Text style={styles.date}>{item.date}</Text>
                          <Text style={styles.stats}>{item.stats}</Text>
                        </TouchableOpacity>
                      );
                    }} />
                </View>
                <View style={styles.button}>
                  <Button buttonText={strings.viewStats} style={styles.allStats}
                    onPress={() => navigation.navigate('Profile')} />
                  <Button buttonText={strings.addNew} style={styles.addNew}
                    onPress={() => navigation.navigate('newGame')} />
                </View>
                <View
                  style={[styles.lineStyle, { marginVertical: verticalScale(20) }]} />
                <View style={styles.thirdContainerStyle}>
                  <Text style={styles.games}>{strings.personalRecords}</Text>
                  <View style={styles.personalRecords}>
                    <Image
                      resizeMode="contain"
                      style={styles.image}
                      source={VOLUME_ICON} />
                    <Text style={styles.Stats}>{strings.training}</Text>
                  </View>
                </View>
                <View style={styles.flatlist}>
                  <FlatList
                    data={props.data}
                    numColumns={2}
                      // @ts-ignore
                listKey={(_item: any, index: any) => `_key${index.toString()}`}
                    keyExtractor={(_item, index) => `_keys${index.toString()}`}
                    renderItem={({ item }) => {
                      return (
                        <View>
                          <TouchableOpacity style={[styles.trainerFlatlist]}>
                            <Text style={styles.trainerName}>{item.name}</Text>
                            <Text style={styles.nametext}>{item.nameText}</Text>
                            <Text style={styles.number}>{item.number}</Text>
                          </TouchableOpacity>
                        </View>
                      );
                    }} />
                </View>
                <View style={styles.button}>
                  <Button buttonText={strings.viewAll} style={styles.addNew}
                    onPress={() => navigation.navigate('Profile')} />
                  <Button buttonText={strings.addNew} style={styles.addNew}
                    onPress={() => navigation.navigate('newTraining')} />
                </View>
                <View
                  style={[styles.lineStyle, { marginVertical: verticalScale(15) }]} />
                <View style={styles.thirdContainerStyle}>
                  <Text style={styles.games}>{strings.IQchallenges}</Text>
                  <View style={styles.IQchallenges}>
                    <Image
                      resizeMode="contain"
                      style={styles.image}
                      source={VOLUME_ICON} />
                    <Text style={styles.challenges}>{strings.challenges}</Text>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={props.challenges}
                      // @ts-ignore
                listKey={(_item: any, index: any) => `_key${index.toString()}`}
                    keyExtractor={(_item, index) => `_key${index.toString()}`}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity style={styles.challengesFlatlist}>
                          <View>
                            <Text style={styles.nameChallenges}>{item.name}</Text>
                            <Text style={styles.dateChallenges}>{item.Date}</Text>
                            <Text style={styles.scoreChallenges}>{item.score}</Text>
                          </View>
                          <Text style={[styles.stats, { fontSize: verticalScale(19) }]}>
                            {item.view}
                          </Text>
                        </TouchableOpacity>
                      );
                    }} />
                </View>
                <View style={[styles.button, { marginTop: verticalScale(20) }]}>
                  <Button buttonText={strings.viewAll} style={styles.addNew}
                    onPress={() => navigation.navigate('MyChallenges')} />
                </View>
                <View style={[styles.lineStyle, { marginBottom: verticalScale(15) }]} />
                <View style={styles.thirdContainerStyle}>
                  <Text style={styles.games}>{strings.recentContent}</Text>
                  <View style={styles.content}>
                    <Image
                      resizeMode="contain"
                      style={styles.image}
                      source={VOLUME_ICON} />
                    <Text style={styles.challenges}>{strings.content}</Text>
                  </View>
                </View>
                <FlatList
                  data={[1, 2, 3, 4]}
                  numColumns={2}
                    // @ts-ignore
                listKey={(_item: any, index: any) => `_key${index.toString()}`}
                  keyExtractor={(_item, index) => `_keys${index.toString()}`}
                  renderItem={() => {
                    return (
                      <View style={[styles.mainContain]}>
                        <Image
                          resizeMode="contain"
                          style={styles.videoIconStyle}
                          source={GALLERY_ICON} />
                      </View>
                    );
                  }} />
                <View style={styles.button}>
                  <Button buttonText={strings.viewAll} style={styles.addNew}
                    onPress={() => navigation.navigate('Content')} />
                  <Button buttonText={strings.addNew} style={styles.addNew}
                    onPress={() => navigation.navigate('newContent')} />
                </View>
              </View></>
          );
        }} /></>
  );
};

export default HomeView;
