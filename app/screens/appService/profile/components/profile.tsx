
import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { Alert, ScrollView, Text, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import { DRAWER_ICON } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";


const ProfileView = (props:any) => {
    const navigation:any = useNavigation();
    
    return (
        <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.firstContain}>
            <Header
              noMiddleLabel={true}
              leftImg={false}
              RightImage={DRAWER_ICON}
              rightImageStyle={{ tintColor: '#8B99A5' }}
              onPressRightImage={() => navigation.navigate('Settings')}
            />
          </View>
          <View style={styles.secondContain}>
  
          </View>
  
          <View style={styles.thirdContain}>
  
          </View>
  
        </View>
      </ScrollView>
    );
};

export default ProfileView;