import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../../../../components/Header";
import styles from "./styles";
import strings from "../../../../components/locales";
import RNTextInput from "../../../../components/Input/RNTextInput";
import { Formik } from "formik";
import { colors } from "../../../../theme/colors";

const EmailScreenView = (props: any) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Formik
          enableReinitialize
          initialValues={{
            email: props.loginData.email,
          }}
          onSubmit={(values, action) => {
            props.setLoginData({
              ...props.loginData,
              email: values.email,
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
                  HeaderText={strings.emailLabel}
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
                  textName={strings.emailLabel}
                  editable={true}
                  placeholder="Email"
                  keyboardType="default"
                  placeholderTextColor={colors.bluePrimary}
                  showRightImage={true}
                  containerStyle={{ width: "100%" }}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={String(errors.email || undefined)}
                  isError={touched.email && errors.email}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default EmailScreenView;
