import React from "react";
import { FlatList, Image, ScrollView, View } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import Header from "../../../../components/Header";
import { NO_IMAGE_PROFILE } from "../../../../theme/constantImages";
import { Text } from "react-native";
import Dropdown from "../../../../components/dropdown";

const EditProfileView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <FlatList
      data={[]}
      keyExtractor={(item, index) => `key-${index}`}
      ListHeaderComponent={() => (
        <View style={{ flex: 1 }}>
          <View style={styles.firstContain}>
            <Header
              HeaderText={strings.EditProfile}
              leftHeaderContainer={{ flex: 0.7 }}
              leftImg={true}
              isGoBack={true}
              isRightHeaderText={true}
              headerRightText={strings.save}
              headerRightTextStyle={{ color: colors.primaryButtonColor }}
              onPressRightImage={() => navigation.navigate("contentTitle")}
            />
          </View>
          <View style={styles.secondContain}>
            <View style={styles.secoundContainerView}>
              <Image
                resizeMode="contain"
                style={styles.noProfile}
                source={NO_IMAGE_PROFILE}
              />
              <Text style={styles.name}>{strings.ChangePassword}</Text>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <Text style={styles.about}>{strings.about}</Text>
            <RNTextInput
              textStyleProps={{
                marginLeft: verticalScale(32),
                fontWeight: "bold",
                paddingVertical: 0,
                marginTop: verticalScale(10),
              }}
              textName={strings.Name}
              editable={true}
              keyboardType="default"
              showLeftImage={true}
              showRightImage={true}
              placeholderTextColor={colors.commonGreyColor}
              textInputContainer={{
                height: DimensionsScale.height / 19,
                fontSize: verticalScale(12),
                borderRadius: 5,
                marginLeft: verticalScale(32),
                width: DimensionsScale.width * 0.85,
                borderColor: colors.commonGreyColor,
                borderWidth: 2,
              }}
            />
            <RNTextInput
              textStyleProps={{
                marginLeft: verticalScale(32),
                fontWeight: "bold",
                paddingVertical: 0,
                marginTop: verticalScale(10),
              }}
              textName={strings.bio}
              editable={true}
              keyboardType="default"
              showLeftImage={true}
              showRightImage={true}
              placeholderTextColor={colors.commonGreyColor}
              textInputContainer={{
                height: DimensionsScale.height / 7,
                fontSize: verticalScale(12),
                borderRadius: 5,
                marginLeft: verticalScale(32),
                width: DimensionsScale.width * 0.85,
                borderColor: colors.commonGreyColor,
                borderWidth: 2,
              }}
            />
          </View>
          <View style={styles.fourthContainer}>
            <View style={styles.birthdayView}>
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.42 }}
                dropDownLabelText={strings.birthday}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.42 }}
                dropDownLabelText={strings.Gender}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
            </View>
            <View style={[styles.birthdayView, { marginTop: 10 }]}>
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.42 }}
                dropDownLabelText={strings.height}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.42 }}
                dropDownLabelText={strings.weight}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.about,
                { marginTop: 20, marginLeft: verticalScale(20) },
              ]}
            >
              {strings.School}
            </Text>
            <View style={styles.schoolContainer}>
              <Dropdown
                dropDownMainStyle={{
                  width: DimensionsScale.width * 0.3,
                  marginRight: 20,
                }}
                dropDownLabelText={strings.city}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
              <RNTextInput
                textStyleProps={{
                  marginLeft: verticalScale(32),
                  fontWeight: "bold",
                  paddingVertical: 0,
                }}
                textName={strings.Name}
                editable={true}
                keyboardType="default"
                showLeftImage={true}
                showRightImage={true}
                placeholderTextColor={colors.commonGreyColor}
                textInputContainer={{
                  height: DimensionsScale.height / 19,
                  fontSize: verticalScale(12),
                  borderRadius: 5,
                  marginLeft: verticalScale(32),
                  width: DimensionsScale.width * 0.53,
                  borderColor: colors.commonGreyColor,
                  borderWidth: 2,
                }}
              />
            </View>
            <View>
              <RNTextInput
                textStyleProps={{
                  marginLeft: verticalScale(20),
                  fontWeight: "bold",
                  paddingVertical: 0,
                  marginTop: verticalScale(15),
                }}
                textName={strings.school}
                editable={true}
                keyboardType="default"
                showLeftImage={true}
                showRightImage={true}
                placeholderTextColor={colors.commonGreyColor}
                textInputContainer={{
                  height: DimensionsScale.height / 19,
                  fontSize: verticalScale(12),
                  borderRadius: 5,
                  marginLeft: verticalScale(20),
                  width: DimensionsScale.width * 0.87,
                  borderColor: colors.commonGreyColor,
                  borderWidth: 2,
                }}
              />
            </View>
            <View style={styles.graduation}>
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.5 }}
                dropDownLabelText={strings.birthday}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
              <Dropdown
                dropDownMainStyle={{ width: DimensionsScale.width * 0.34 }}
                dropDownLabelText={strings.GPA}
                placeholder={""}
                renderSelectedItem={(value: any) =>
                  console.log("value000", value)
                }
                labelField={"name"}
                data_list={[
                  {
                    name: "23-24",
                    value: 1,
                  },
                  {
                    name: "22-23",
                    value: 2,
                  },
                ]}
              />
            </View>
            <View>
              <Text style={styles.footbal}>{strings.footbal}</Text>
              <View style={styles.footbalContainer}>
                <Dropdown
                  dropDownMainStyle={{
                    width: DimensionsScale.width * 0.32,
                    marginRight: verticalScale(15),
                  }}
                  dropDownLabelText={strings.mainPosition}
                  placeholder={""}
                  renderSelectedItem={(value: any) =>
                    console.log("value000", value)
                  }
                  labelField={"name"}
                  data_list={[
                    {
                      name: "23-24",
                      value: 1,
                    },
                    {
                      name: "22-23",
                      value: 2,
                    },
                  ]}
                />
                <Dropdown
                  dropDownMainStyle={{ width: DimensionsScale.width * 0.32 }}
                  dropDownLabelText={strings.otherPosition}
                  placeholder={""}
                  renderSelectedItem={(value: any) =>
                    console.log("value000", value)
                  }
                  labelField={"name"}
                  data_list={[
                    {
                      name: "23-24",
                      value: 1,
                    },
                    {
                      name: "22-23",
                      value: 2,
                    },
                  ]}
                />
              </View>
            </View>
            <View>
              <Text style={styles.footbal}>{strings.baseball}</Text>
              <View style={styles.footbalContainer}>
                <Dropdown
                  dropDownMainStyle={{
                    width: DimensionsScale.width * 0.32,
                    marginRight: verticalScale(15),
                  }}
                  dropDownLabelText={strings.mainPosition}
                  placeholder={""}
                  renderSelectedItem={(value: any) =>
                    console.log("value000", value)
                  }
                  labelField={"name"}
                  data_list={[
                    {
                      name: "23-24",
                      value: 1,
                    },
                    {
                      name: "22-23",
                      value: 2,
                    },
                  ]}
                />
                <Dropdown
                  dropDownMainStyle={{ width: DimensionsScale.width * 0.32 }}
                  dropDownLabelText={strings.otherPosition}
                  placeholder={""}
                  renderSelectedItem={(value: any) =>
                    console.log("value000", value)
                  }
                  labelField={"name"}
                  data_list={[
                    {
                      name: "23-24",
                      value: 1,
                    },
                    {
                      name: "22-23",
                      value: 2,
                    },
                  ]}
                />
              </View>
            </View>
            <View>
              <Text style={styles.footbal}>{strings.Basketball}</Text>
              <View
                style={[
                  styles.footbalContainer,
                  { marginBottom: verticalScale(20) },
                ]}
              >
                <Dropdown
                  dropDownMainStyle={{
                    width: DimensionsScale.width * 0.32,
                    marginRight: verticalScale(15),
                  }}
                  dropDownLabelText={strings.mainPosition}
                  placeholder={""}
                  renderSelectedItem={(value: any) =>
                    console.log("value000", value)
                  }
                  labelField={"name"}
                  data_list={[
                    {
                      name: "23-24",
                      value: 1,
                    },
                    {
                      name: "22-23",
                      value: 2,
                    },
                  ]}
                />
                <Dropdown
                  dropDownMainStyle={{ width: DimensionsScale.width * 0.32 }}
                  dropDownLabelText={strings.otherPosition}
                  placeholder={""}
                  renderSelectedItem={(value: any) =>
                    console.log("value000", value)
                  }
                  labelField={"name"}
                  data_list={[
                    {
                      name: "23-24",
                      value: 1,
                    },
                    {
                      name: "22-23",
                      value: 2,
                    },
                  ]}
                />
              </View>
            </View>

            <View></View>
          </View>
        </View>
      )}
      renderItem={({ item, index }) => <></>}
    />
  );
};

export default EditProfileView;
