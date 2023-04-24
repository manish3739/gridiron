
import React from "react";
import { Keyboard, Platform, TouchableOpacity, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import strings from "../../../../components/locales";
import styles from "./styles";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { Formik } from "formik";

const SignInView = (props: any) => {
 

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : undefined}
        style={[styles.welcomeScreen]}
      >
        <View style={styles.welcomeScreen}>
          <View style={styles.headerContainer}>
            <Header
              HeaderText={strings.SignIn}
              isGoBack={true}
            />
          </View>
          <View style={styles.secondContainer}>
            <Formik
              enableReinitialize
              initialValues={{
                email: props.loginData.email,
                password: props.loginData.password
              }}
              onSubmit={(values, action) => {
                props.setLoginData({
                  ...props.loginData,
                  email: values.email,
                  password: values.password
                });
                props.handleLogin(values.email,values.password);
              }}
              validationSchema={props.loginValidationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <>
                  <RNTextInput
                    textName={strings.Email}
                    editable={true}
                    placeholder="name@school.edu"
                    keyboardType="default"
                    showLeftImage={true}
                    showRightImage={true}
                    autoCapitalize="none"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholderTextColor="#00000040"
                    // @ts-ignore
                    error={errors.email || undefined}
                    isError={touched.email && errors.email}
                  />
                  <RNTextInput
                    textName={strings.Password}
                    editable={true}
                    placeholder="Password"
                    keyboardType="default"
                    showLeftImage={true}
                    showRightImage={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholderTextColor="#00000040"
                    // @ts-ignore
                    error={errors.password || undefined}
                    isError={touched.password && errors.password}
                  />
                  <Text style={styles.alreadySignInText}>{strings.ForgetPassword}</Text>
                  <Button
                    buttonText={strings.continue}
                    onPress={ handleSubmit}
                  />
                </>

              )}
            </Formik>
            <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.alreadySignInText}>{strings.DontHaveAccount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback >
  );
};

export default SignInView;
