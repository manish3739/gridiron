import * as React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  TextStyle,
  StyleSheet,
  Dimensions,
} from "react-native";
import Modal, { ModalProps } from "react-native-modal";
/**
 * ? Local Imports
 */
import Divider from "./divider/Divider";
import ActionButton, { IActionButtonProps } from "./action-button/ActionButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

export interface IPickerModalProps {
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  cancelButtonStyle?: CustomStyleProp;
  titleTextContainer?: CustomStyleProp;
  titleTextStyle?: CustomTextStyleProp;
  cancelButtonTextStyle?: CustomTextStyleProp;
  modalProps?: ModalProps;
  actionButtonProps?: IActionButtonProps;
  data: string[] | number[];
  title: string;
  isVisible: boolean;
  TouchableComponent?: any;
  cancelButtonUnderlayColor?: string;
  onPress: (selectedItem: string | number, index: number) => void;
  onCancelPress: () => void;
  onBackdropPress: () => void;
}

const PickerModal: React.FC<IPickerModalProps> = ({
  style,
  data,
  title,
  onPress,
  isVisible,
  modalProps,
  dividerStyle,
  titleTextStyle,
  cancelButtonStyle,
  titleTextContainer,
  cancelButtonTextStyle,
  actionButtonProps,
  cancelButtonUnderlayColor = "rgba(200,200,200,0.1)",
  TouchableComponent = TouchableHighlight,
  onBackdropPress,
  onCancelPress,
  ...rest
}) => {
  const Title = () => (
    <View style={[styles.titleTextContainer, titleTextContainer]}>
      <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
    </View>
  );

  const CancelButton = () => (
    <TouchableComponent
      underlayColor={cancelButtonUnderlayColor}
      style={[styles.cancelButtonStyle, cancelButtonStyle]}
      onPress={onCancelPress}
    >
      <Text style={[styles.cancelButtonTextStyle, cancelButtonTextStyle]}>
        Cancel
      </Text>
    </TouchableComponent>
  );

  const Picker = () => (
    <View style={[styles.mainContent, style]}>
      <Title />
      <Divider style={dividerStyle} />
      {data.map((item: string | number, index: number) => (
        <ActionButton
          key={index}
          TouchableComponent={TouchableComponent}
          isLastItem={index === data.length - 1}
          {...actionButtonProps}
          text={item}
          onActionPress={() => onPress && onPress(item, index)}
        />
      ))}
    </View>
  );

  return (
    <Modal
      isVisible={isVisible}
      {...modalProps}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.container}>
        <Picker />
        <CancelButton />
      </View>
    </Modal>
  );
};


const { width: ScreenWidth } = Dimensions.get("screen");

interface Style {
  container: ViewStyle;
  mainContent: ViewStyle;
  cancelButtonStyle: ViewStyle;
  cancelButtonTextStyle: TextStyle;
  titleTextStyle: TextStyle;
  titleTextContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    bottom: 32,
    position: "absolute",
  },
  mainContent: {
    width: ScreenWidth * 0.9,
    backgroundColor: "#232323",
    borderRadius: 12,
    paddingTop: 16,
  },
  titleTextStyle: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    paddingBottom: 16,
  },
  titleTextContainer: {
    width: ScreenWidth * 0.7,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  cancelButtonStyle: {
    height: 50,
    width: ScreenWidth * 0.9,
    backgroundColor: "#232323",
    borderRadius: 12,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonTextStyle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});

export default PickerModal;
