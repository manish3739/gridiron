import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import { colors } from "../../../../theme/colors";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { Formik } from "formik";

const UsernameScreenView = (props: any) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{
            userName: props.loginData.userName,
          }}
          onSubmit={(values, action) => {
            props.setLoginData({
              ...props.loginData,
              userName: values.userName,
            });
            props.handleLogin();
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
              <View style={styles.firstContain}>
                <Header
                  HeaderText={strings.userNameLabel}
                  leftImg={true}
                  isGoBack={true}
                  isRightHeaderText={true}
                  headerRightText={strings.saveLabel}
                  headerRightTextStyle={styles.headerTextStyle}
                  onPressRightImage={() => handleSubmit()}
                />
              </View>
              <View style={styles.secondContain}>
                <RNTextInput
                  textName={strings.userNameLabel}
                  editable={true}
                  placeholder="Username"
                  keyboardType="default"
                  placeholderTextColor={colors.bluePrimary}
                  showRightImage={true}
                  containerStyle={{ width: "100%" }}
                  value={values.userName}
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  error={String(errors.userName || undefined)}
                  isError={touched.userName && errors.userName}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default UsernameScreenView;
