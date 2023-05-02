
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from "../../../../components/Header";
import styles from "./styles";
import { ABOUT_ICON, CLOSE_ICON, HELP_ICON, INVITE_FRIEND_ICON, LOGOUT_ICON, NOTIFICATION_ICON, USER_ICON } from "../../../../theme/constantImages";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import Button from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";

const SettingsView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.firstContain}>
          <Header
            HeaderText={strings.settingsLabel}
            leftImg={false}
            RightImage={CLOSE_ICON}
            onPressRightImage={() => navigation.goBack()}
          />
        </View>
        <View style={styles.secondContain}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.optionContainer}>
            <Image style={styles.optionImage} resizeMode="contain" source={USER_ICON} />
            <Text style={styles.optionTextStyle}>{strings.accountLabel}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionContainer}>
            <Image style={styles.optionImage} resizeMode="contain" source={NOTIFICATION_ICON} />
            <Text style={styles.optionTextStyle}>{strings.notificationsLabel}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('InviteFriends')} style={styles.optionContainer}>
            <Image style={styles.optionImage} resizeMode="contain" source={INVITE_FRIEND_ICON} />
            <Text style={styles.optionTextStyle}>{strings.inviteFrndsLabel}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')} style={styles.optionContainer}>
            <Image style={styles.optionImage} resizeMode="contain" source={HELP_ICON} />
            <Text style={styles.optionTextStyle}>{strings.helpText}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')} style={styles.optionContainer}>
            <Image style={styles.optionImage} resizeMode="contain" source={ABOUT_ICON} />
            <Text style={styles.optionTextStyle}>{strings.aboutLabel}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thirdContain}>
          <Button
            buttonText={strings.logoutLabel}
            onPress={() => props.handleLogout()}
            style={{ borderColor: colors.commonThemeColor, flexDirection: 'row' }}
            buttonLabelStyle={{ color: colors.commonThemeColor }}
            buttonType={"tertiary"}
            leftIconImage={LOGOUT_ICON}
            leftBtnImage={true}
            leftIconStyle={{ tintColor: colors.commonThemeColor, right: 5 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsView;