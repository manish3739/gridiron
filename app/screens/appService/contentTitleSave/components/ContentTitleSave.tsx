import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { NO_IMAGE_PROFILE } from "../../../../theme/constantImages";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import Button from "../../../../components/Button";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";

const ContentTitleSaveView = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          HeaderText={strings.ContectTitle}
          leftHeaderContainer={{ flex: 0.7 }}
          leftImg={true}
          isGoBack={true}
          isRightHeaderText={true}
          onPressRightImage={() => {}}
          headerRightText={strings.save}
          headerRightTextStyle={{ color: colors.primaryButtonColor }}
        />
      </View>
      <View style={styles.secondContain}>
        <Image
          style={styles.noProfile}
          source={NO_IMAGE_PROFILE}
        />
        <RNTextInput
          textName={strings.editTitle}
          editable={true}
          keyboardType="default"
          showLeftImage={true}
          showRightImage={true}
          placeholderTextColor={colors.commonGreyColor}
          textInputContainer={{ height: DimensionsScale.height / 19, fontSize: verticalScale(12) }}
        />
        <RNTextInput
          textName={strings.editCaption}
          editable={true}
          keyboardType="default"
          showLeftImage={true}
          showRightImage={true}
          placeholderTextColor="#00000040"
          multiline={true}
          numberOfLines={5}
          textInputContainer={{ fontSize: 14, height: DimensionsScale.height / 5, paddingTop: 15 }}
        />
        <Button
          buttonText={strings.deleteContent}
          onPress={() => { }}
          style={{
            borderColor: colors.secondaryButtonColor,
            marginTop: 20,
            width: DimensionsScale.width/1.5,
          }}
          buttonLabelStyle={{ color: colors.commonWhiteColor }}
          buttonType={"secondary"}
        />
      </View>

    </View>
  );
};

export default ContentTitleSaveView;