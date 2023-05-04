import React from "react";
import { Keyboard, Platform, Text, TouchableOpacity, View } from "react-native";
import Button from "../../../../components/Button";
import AnimatedProgress from "../../../../components/AnimatedProgressBar";
import { DimensionsScale } from "../../../../theme/Dimensions";
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { verticalScale } from "../../../../utils/scale";
import RNTextInput from "../../../../components/Input/RNTextInput";
import Checkbox from "../../../../components/Checkbox";
import { Formik } from "formik";
import * as yup from "yup";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { colors } from "../../../../theme/colors";

const SignupEmailView = (props: any) => {
  const emailValidation = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter valid email"
      )
      .required(strings.emailIsRequired),
    ageVerification: yup.boolean().required("Age verification is required"),
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={[styles.container]}
      >
        <View style={styles.container}>
          <View style={styles.firstContain}>
            <Header HeaderText={strings.playerSignUp} isGoBack={true} />
          </View>
          <Formik
            enableReinitialize
            initialValues={{
              email: props.registerData.email,
              ageVerification: props.registerData.ageVerification,
            }}
            onSubmit={(values, action) => {
              props.setRegisterData({
                ...props.registerData,
                email: values.email,
                ageVerification: values.ageVerification,
              });
              props.setSignUpOnBoarding(1);
            }}
            validationSchema={emailValidation}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              setFieldValue,
            }) => (
              <>
                <View style={styles.secondContain}>
                  <View style={styles.animatedContainer}>
                    <AnimatedProgress
                      value={15}
                      max={100}
                      activeColor={"#56d1bf"}
                      backgroundColor={"#c4c2c2"}
                      width={DimensionsScale.width * 0.9}
                      style={{ marginVertical: 10 }}
                      height={15}
                    />
                    <Text style={styles.mainOnBoardingLabel}>
                      {strings.getStartedEmail}
                    </Text>
                    <Text
                      style={[styles.mainBoldLabelStyle, { paddingTop: 15 }]}
                    >
                      {strings.schoolEmailPreferred}
                    </Text>
                    <Text style={styles.mainBoldLabelStyle}>
                      {strings.mailwithVerify}
                    </Text>

                    <RNTextInput
                      editable={true}
                      autoCapitalize="none"
                      value={values.email}
                      placeholder="name@school.edu or other"
                      keyboardType="default"
                      placeholderTextColor={colors.bluePrimary}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      error={String(errors.email || "")}
                      isError={touched.email && errors.email}
                    />
                    <Checkbox
                      data={props.isChildrenData}
                      isHorizontal={false}
                      returnData={(val) => {
                        props.setIsChildrenData(val);
                        const filtered = val.filter((el, index) => {
                          return el.isSelected === true;
                        });
                        setFieldValue("ageVerification", filtered[0].index);
                      }}
                      textStyle={{ fontSize: verticalScale(15) }}
                      isMultiple={false}
                      error={String(errors.ageVerification || "")}
                      isError={
                        touched.ageVerification && errors.ageVerification
                      }
                    />
                    <View style={{ paddingTop: verticalScale(25) }}>
                      <Text style={styles.mainBoldLabelStyle}>
                        {strings.signingUpAgreeing}
                      </Text>
                      <Text
                        style={[
                          styles.alreadySignInText,
                          { paddingVertical: 0, fontSize: verticalScale(13) },
                        ]}
                      >
                        {strings.termsAndConditions}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.thirdContain}>
                  <Button
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                  <TouchableOpacity onPress={() => props.handleAlreadySignIn()}>
                    <Text style={styles.alreadySignInText}>
                      {strings.alreadySignIn}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default SignupEmailView;
