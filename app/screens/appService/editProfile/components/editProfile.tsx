import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import styles from "./styles";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import Header from "../../../../components/Header";
import { CAMERA_PICKER_ICON, USER_ICON } from "../../../../theme/constantImages";
import { Text } from "react-native";
import Dropdown from "../../../../components/dropdown";
import FormImagePicker from "../../../../components/ImagePicker/ImagePicker";
import { TouchableOpacity } from "react-native";

const EditProfileView = (props: any) => {
  const [imagePicker, setImagePicker] = useState(null);
  return (
    <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:verticalScale(20)}} >
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.EditProfile}
          leftHeaderContainer={{ flex: 0.7 }}
          leftImg={true}
          isGoBack={true}
          isRightHeaderText={true}
          headerRightText={strings.save}
          onPressRightImage={() => {}}
          headerRightTextStyle={{ color: colors.primaryButtonColor }}
        />
      </View>
      <View style={styles.secondContain}>
        <View style={styles.secoundContainerView}>
          <FormImagePicker
            onImageChange={(source: any) => {
              setImagePicker(source.uri);
            }}
            showPreview={true}
            renderTrigger={(selectImg: any) => (
              <>
                <View>
                  <View>
                    <View
                      style={styles.imagepickerStyle}
                    >
                      {imagePicker ? (
                        <Image
                          style={styles.picker}
                          source={{ uri: imagePicker }}
                        />
                      ) : (
                        <Image
                          style={styles.image2}
                          source={USER_ICON}
                        />
                      )}
                    </View>
                    <TouchableOpacity
                      onPress={() => selectImg()}
                      style={styles.imagePicker}
                    >
                      <Image
                        style={styles.image}
                        source={CAMERA_PICKER_ICON}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          />
          <Text style={styles.name}>{strings.ChangePassword}</Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={styles.about}>{strings.about}</Text>
        <RNTextInput
          textStyleProps={{
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
            fontSize: verticalScale(12),
            borderRadius: 5,
            width: '100%'
          }}
        />
        <RNTextInput
          textStyleProps={{
            fontWeight: "bold",
            paddingVertical: 0,
            marginTop: verticalScale(10),
          }}
          textName={strings.bio}
          editable={true}
          multiline
          numberOfLines={5}
          keyboardType="default"
          placeholderTextColor={colors.commonGreyColor}
          textInputContainer={{
            height: DimensionsScale.height / 6,
            fontSize: verticalScale(12),
            borderRadius: 5,
            justifyContent: 'flex-start',
            textAlignVertical: 'top',
            width: '100%'
          }}
        />
      </View>
      <View style={styles.fourthContainer}>
        <View style={styles.birthdayView}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.4,
              marginTop: 0,
            }}
            dropDownLabelText={strings.birthday}
            placeholder={""}
            renderSelectedItem={(value: any) => console.log("value", value)}
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
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.4,
              marginTop: 0,
            }}
            dropDownLabelText={strings.Gender}
            placeholder={""}
            renderSelectedItem={(value: any) => console.log("value", value)}
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
        <View style={[styles.birthdayView, { marginTop: verticalScale(10) }]}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.4,
              marginTop: 0,
            }}
            dropDownLabelText={strings.height}
            placeholder={""}
            renderSelectedItem={(value: any) => console.log("value", value)}
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
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.4,
              marginTop: 0,
            }}
            dropDownLabelText={strings.weight}
            placeholder={""}
            renderSelectedItem={(value: any) => console.log("value", value)}
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
            { marginTop: verticalScale(20) },
          ]}
        >
          {strings.School}
        </Text>
        <View style={styles.schoolContainer}>

          <View style={{ flex: 4, alignItems: 'flex-start' }}>
            <RNTextInput
              textStyleProps={{
                fontWeight: "bold",
                paddingVertical: 0,
              }}
              textName={strings.city}
              editable={true}
              keyboardType="default"
              showLeftImage={true}
              showRightImage={true}
              placeholderTextColor={colors.commonGreyColor}
              textInputContainer={{
                fontSize: verticalScale(12),
                borderRadius: 5,
                paddingVertical: 11,
                height:DimensionsScale.height / 18
              }}
            />
          </View>
          <View style={{ flex: 2, alignItems: 'flex-end' }}>
            <Dropdown
              dropDownMainStyle={{
                width: DimensionsScale.width * 0.3,
                 marginTop: 2,
              }}
              textLabelStyle={{marginTop:8}}
              dropDownLabelText={strings.state}
              placeholder={""}
              renderSelectedItem={(value: any) => console.log("value", value)}
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
          <RNTextInput
            textStyleProps={{
              fontWeight: "bold",
              paddingVertical: 0,
              marginTop: verticalScale(1),
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
            }}
          />
        </View>
        <View style={styles.graduation}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.5,
              marginTop: 0,
            }}
            dropDownLabelText={strings.graduationYear1}
            placeholder={""}
            renderSelectedItem={(value: any) => console.log("value", value)}
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
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.34,
              marginTop: 0,
            }}
            dropDownLabelText={strings.GPA}
            placeholder={""}
            renderSelectedItem={(value: any) => console.log("value", value)}
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
                marginTop: 0,
              }}
              dropDownLabelText={strings.mainPosition}
              placeholder={""}
              renderSelectedItem={(value: any) =>
                console.log("value", value)
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
              dropDownMainStyle={{
                width: DimensionsScale.width * 0.32,
                marginTop: 0,
              }}
              mainContainerStyle={{
                marginLeft: verticalScale(20)
              }}
              dropDownLabelText={strings.otherPosition}
              placeholder={""}
              renderSelectedItem={(value: any) =>
                console.log("value", value)
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
                marginTop: 0,
              }}
              dropDownLabelText={strings.mainPosition}
              placeholder={""}
              renderSelectedItem={(value: any) =>
                console.log("value", value)
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
              dropDownMainStyle={{
                width: DimensionsScale.width * 0.32,
                marginTop: 0,
              }}
              mainContainerStyle={{
                marginLeft: verticalScale(20)
              }}
              dropDownLabelText={strings.otherPosition}
              placeholder={""}
              renderSelectedItem={(value: any) =>
                console.log("value", value)
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
            ]}
          >
            <Dropdown
              dropDownMainStyle={{
                width: DimensionsScale.width * 0.32,
                marginTop: 0,
              }}
              dropDownLabelText={strings.mainPosition}
              placeholder={""}
              renderSelectedItem={(value: any) =>
                console.log("value", value)
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
              dropDownMainStyle={{
                width: DimensionsScale.width * 0.32,
                marginTop: 0,
              }}
              mainContainerStyle={{
                marginLeft: verticalScale(20)
              }}
              dropDownLabelText={strings.otherPosition}
              placeholder={""}
              renderSelectedItem={(value: any) =>
                console.log("value", value)
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
      </View>
    </ScrollView>
  );
};

export default EditProfileView;
