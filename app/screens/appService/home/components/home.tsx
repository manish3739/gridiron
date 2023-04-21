
import React, { useState, useEffect } from "react";
import { View } from 'react-native';
import Header from "../../../../components/Header";
import { INFORMATION_ICON } from "../../../../theme/constantImages";
import styles from "./styles";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            noMiddleLabel={true}
            leftImg={false}
            RightImage={INFORMATION_ICON}
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

export default HomeView;