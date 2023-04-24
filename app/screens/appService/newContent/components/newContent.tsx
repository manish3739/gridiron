import React from "react";
import {
  Image,
  View,
} from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import {
  NO_IMAGE_PROFILE,
} from "../../../../theme/constantImages";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";

const NewContentView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.NewContect}
          leftHeaderContainer={{ flex: 0.7 }}
          leftImg={true}
          isGoBack={true}
          isRightHeaderText={true}
          headerRightText={strings.save}
          headerRightTextStyle={{ color: colors.primaryButtonColor }}
          onPressRightImage={() => navigation.navigate('ContentTitleView')}
        />
      </View>
      <View style={styles.secondContain}>
        <Image
          style={styles.noProfile}
          source={NO_IMAGE_PROFILE}
        />
        <View style={styles.textInputContainer}>
          <RNTextInput
            textName={strings.title}
            editable={true}
            keyboardType="default"
            showLeftImage={true}
            showRightImage={true}
            placeholderTextColor={colors.commonGreyColor}
            textInputContainer={{ height: DimensionsScale.height / 19, fontSize: verticalScale(12) }}
          />
          <RNTextInput
            textName={'Caption'}
            editable={true}
            keyboardType="default"
            showLeftImage={true}
            showRightImage={true}
            placeholderTextColor={colors.commonGreyColor}
            multiline={true}
            numberOfLines={5}
            placeholder={strings.descriptionCaptionLabel}
            textInputContainer={{ fontSize: 14, height: DimensionsScale.height / 5, paddingTop: 15 }}
          />
        </View>
      </View>


    </View>
  );
};

export default NewContentView;