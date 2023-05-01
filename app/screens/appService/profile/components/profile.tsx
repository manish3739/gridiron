
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import {
  CAMERA_PICKER_ICON,
  DRAWER_ICON,
  NO_IMAGE_PROFILE,
  USER_ICON,
  
} from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Button from "../../../../components/Button";
import { verticalScale } from "../../../../utils/scale";
import Stats from "./Stats";
import Training from "./Training";
import About from "./About";
import { useNavigation } from "@react-navigation/native";
import FormImagePicker from "../../../../components/ImagePicker/ImagePicker";


const ProfileView = (props: any) => {
  const navigation: any = useNavigation();
  const[imagePicker, setImagePicker] = useState(null)

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
        onPressRightImage={() => props.navigation.navigate("Settings")} />
    </View>
    <View style={styles.secondContain}>
        <View style={{ alignItems: "center" }}>
        <FormImagePicker
                        onImageChange={(source: any) => {
                             setImagePicker(source.uri);
                        }}
                        showPreview={true}
                        renderTrigger={(selectImg: any) => (
                            <>
                                <View >
                                    <View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', width: 100, height: 100, borderRadius: 90, backgroundColor: colors.secondaryGreyColor }}>
                                            {imagePicker ?
                                                <Image style={{ width: 100, height: 100, borderRadius: 90 }} source={{ uri: imagePicker }} />
                                                :
                                                <Image style={{ tintColor: colors.commonLightGreyColor, width: 40, height: 40 }} source={USER_ICON} />
                                            }
                                        </View>
                                        <TouchableOpacity onPress={() => selectImg()} style={{ height: 30, width: 30, position: 'absolute', right: 0, bottom: 5, backgroundColor: colors.commonGreyColor, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                            <Image style={{ height: 15, width: 15, tintColor: colors.commonLightGreyColor }} source={CAMERA_PICKER_ICON} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}
                    />








          {/* <Image
            resizeMode="contain"
            style={styles.noProfile}
            source={NO_IMAGE_PROFILE} /> */}
          <Text style={styles.name}>{strings.name}</Text>
          <Text>{strings.information}</Text>
          <Text style={styles.verify}>{strings.verify}</Text>

        </View>
        <View style={styles.button}>
          <Button
          onPress={() => navigation.navigate('editProfile')}
            buttonText={strings.editProfile}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"} />
          <Button
            buttonText={strings.shareProfile}
            style={styles.buttonEdit}
            buttonLabelStyle={{ color: colors.commonWhiteColor }}
            buttonType={"tertiary"} />
        </View>
        </View>
        <View style={styles.listTab}>
          <View style={styles.list}>
            {props.listTab.map((e: any) => {
              return (
                <TouchableOpacity onPress={() => props.setStatusFilter(e.status)}
                  style={[styles.btnTab, props.status === e.status && styles.btnTabActive]}>

                  <Text style={{ fontSize: verticalScale(14), color: props.status === e.status ? colors.commonThemeColor : colors.blackColorCode }}>{e.status}</Text>
                </TouchableOpacity>
              )
            }
            )}
            
          </View>
          {props.status === 'Stats' ? (
            <View style={styles.container}>
              <Stats data1={props.data1} passingData={props.passingData} rushingData={props.rushingData}/>
              
            </View>
          ) : props.status === 'Training' ?
            (
              <View style={styles.container}>
                <Training data={props.data}/>
             
            </View>
            )
            : 
            <View style={styles.container}>
              <About/>
            </View>
            }
        </View>
      </View>
  );
};

export default ProfileView;