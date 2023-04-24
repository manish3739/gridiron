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
  USER_ICON,
} from "../../../../theme/constantImages";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Button from "../../../../components/Button";

const listTab = [
  {
    status: "Photos",
  },
  {
    status: "Videos",
  },
 
];



const ContentView = (props: any) => {
  const [status, setStatus] = useState("Photos");
  const setStatusFilter = (status: any) => {
    setStatus(status);
  };
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
            onPressRightImage={() => navigation.navigate("Settings")}
          />
        </View>
        <View style={styles.secondContain}>
          <View style={{alignItems:"center"}}>
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
              onPress={() => {}}
              style={styles.buttonEdit}
              buttonLabelStyle={{ color: colors.commonWhiteColor }}
              buttonType={"tertiary"}
            />
            <Button
              buttonText={strings.shareProfile}
              onPress={() => {}}
              style={styles.shareButton}
              buttonLabelStyle={{ color: colors.commonWhiteColor }}
              buttonType={"tertiary"}
            />
            
          </View>
          <View style={{ }}>
            <View
              style={styles.list}
            >
              {listTab.map(e => (
                    <TouchableOpacity onPress={() => setStatusFilter(e.status)}
                     style={[styles.btnTab, status === e.status && styles.btnTabActive]}>
                        
                        <Text>{e.status}</Text>
                    </TouchableOpacity>
                    ))}
                   
            </View>
            {status === 'Photos' ? (
                <View>
                     <Image
              resizeMode="contain"
              style={styles.photos}
              source={NO_IMAGE_PROFILE}
            />
                </View>
            ) : status === 'Videos' ?
            (
                <View>
                    <Image
              resizeMode="contain"
              style={styles.photos}
              source={NO_IMAGE_PROFILE}
            />
                </View>
            )
             : null}
           
          </View>
          

        
        </View>
       

        <View style={styles.thirdContain}>
        <Button
              buttonText={strings.addNew}
              onPress={() => navigation.navigate('NewContentView')}
               style={styles.addNew}
           
            /></View>
        
      </View>
  );
};

export default ContentView;
