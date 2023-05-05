import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
import { verticalScale } from "../../utils/scale";
import { DimensionsScale } from "../../theme/Dimensions";
import { fonts } from "../../theme/Fonts";

type ModalProps = {
  isVisible: boolean;
  onBackdropPress: any;
  footerStyle?: any;
  children: React.ReactNode;
  [x: string]: any;
};

export const Modal = ({
  isVisible = false,
  children,
  onBackdropPress,
  footerStyle,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      onBackdropPress={onBackdropPress}
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={[styles.footer]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingVertical: verticalScale(30),
    height:DimensionsScale.height / 2.4
  },
  header: {
    flex: 3,
    alignItems:'flex-start',
    justifyContent:'flex-end',
  },
  text: {
    fontSize: verticalScale(18),
    paddingHorizontal:verticalScale(30),
    fontFamily: fonts.medium
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: 15,
    flex: 1,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,

  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;