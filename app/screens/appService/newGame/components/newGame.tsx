import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Header from "../../../../components/Header";
import { useNavigation } from "@react-navigation/native";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { DimensionsScale } from "../../../../theme/Dimensions";
import { verticalScale } from "../../../../utils/scale";
import Dropdown from "../../../../components/dropdown";
import Button from "../../../../components/Button";
import DateTimePicker from "../../../../components/DateTimePicker";
import { SHARE_ICON } from "../../../../theme/constantImages";

const NewGameView = (props: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.firstContain}>
        <Header
          MainHeadStyle={{ paddingTop: verticalScale(15) }}
          HeaderText={strings.newGame}
          isGoBack={true}
        />
      </View>
      <View style={styles.secondContain}>
        <Text style={styles.name}>{strings.name}</Text>
        <Text style={styles.information}>{strings.information}</Text>
        <RNTextInput
          textStylelabel={{ paddingVertical: 1, fontWeight: "bold" }}
          placeholder={strings.inputGame}
          textName={strings.game}
          editable={true}
          keyboardType="default"
          showLeftImage={true}
          showRightImage={true}
          placeholderTextColor={colors.commonGreyColor}
          textInputContainer={{
            height: DimensionsScale.height / 16,
            fontSize: verticalScale(16),
            width: DimensionsScale.width / 1.12,
            marginBottom: verticalScale(8),
            fontWeight: '500'
          }}
        />
        <View style={styles.datePicker}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.4,
              marginTop: 0,
            }}
            dropDownLabelText={strings.birthday}
            placeholder={strings.footbal}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
          <DateTimePicker
            isDatePicker={true}
            renderDate={(date: any) => console.log("date", date)}
            renderTime={(time: any) => console.log("time", time)}
            textDatePicker={'Date'}
          />
        </View>
        <View style={styles.position}>
          <Dropdown
            dropDownMainStyle={{
              width: DimensionsScale.width * 0.4,
              marginTop: 0,
            }}
            dropDownLabelText={strings.position}
            placeholder={"QB"}
            renderSelectedItem={(value: any) => console.log("value000", value)}
            labelField={"name"}
            data_list={[
              {
                name: "23-24",
                value: 1,
              },
              {
                name: "22-23",
                value: 2,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Button
          buttonText={strings.enterManually}
          style={{ borderColor: colors.commonThemeColor, marginVertical: 20 }}
          buttonLabelStyle={{ color: colors.commonThemeColor }}
          buttonType={"tertiary"}
          onPress={() => navigation.navigate("gameDetail")}
        />
        <Button
          buttonText={strings.share}
          style={styles.share}
          leftIconImage={SHARE_ICON}
          leftBtnImage={true}
          onPress={() => { props.handleShare() }}
          leftIconStyle={{ tintColor: colors.commonWhiteColor }}
        />
      </View>
    </View>
  );
};

export default NewGameView;
