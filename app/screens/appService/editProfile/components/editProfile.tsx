import React from "react";
import {
  Image,
  View,
} from "react-native";
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

const EditProfileView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.EditProfile}
          leftHeaderContainer={{ flex: 0.7 }}
          leftImg={true}
          isGoBack={true}
          isRightHeaderText={true}
          headerRightText={strings.save}
          headerRightTextStyle={{ color: colors.primaryButtonColor }}
          onPressRightImage={() => navigation.navigate('contentTitle')}
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

        </View>

        </View>
     


    </View>
  );
};

export default EditProfileView;