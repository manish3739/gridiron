
import React from "react";
import { ScrollView, Text, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { useNavigation } from "@react-navigation/native";
import FormImagePicker from "../../../../components/ImagePicker/ImagePicker";
import Button from "../../../../components/Button";
import { colors } from "../../../../theme/colors";


const VerifyAccountView = (props: any) => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.verifyMyAccountLabel}
            leftImg={true}
            isGoBack={true}
          />
        </View>
        <View style={styles.secondContain}>
          <Text style={styles.descprtnTextLabel}>To verify your account, you will need to upload (1)
            or more official school documents showing your name and school.
            Such as, School ID, report card, letter from the school.
          </Text>
          <FormImagePicker
            onImageChange={(source: any) => {
              console.log("source", source)
            }}
            showPreview={true}
            renderTrigger={(selectImg: any) => (
                  <Button
                    buttonText={strings.uploadPhotoLabel}
                    style={{ borderColor: colors.commonThemeColor, marginTop: 20, alignSelf: 'center' }}
                    buttonLabelStyle={{ color: colors.commonThemeColor }}
                    buttonType={"tertiary"}
                    onPress={() => selectImg()}
                  />
            )}
          />
          <Text style={styles.pleaseAllowTextStyle}>
            {strings.pleaseAllowBusinessDays}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default VerifyAccountView;