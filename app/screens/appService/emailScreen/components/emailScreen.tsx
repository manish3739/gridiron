
import React from "react";
import { ScrollView, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";

const EmailScreenView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.emailLabel}
            leftImg={true}
            isGoBack={true}
            isRightHeaderText={true}
            headerRightText={strings.saveLabel}
            headerRightTextStyle={styles.headerTextStyle}
            onPressRightImage={() => navigation.navigate('Account')}
          />
        </View>
        <View style={styles.secondContain}>
          <RNTextInput
            textName={strings.emailLabel}
            editable={true}
            placeholder="Email"
            keyboardType="default"
            placeholderTextColor="#00000040"
            showRightImage={true}
            containerStyle={{ width: '100%' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EmailScreenView;