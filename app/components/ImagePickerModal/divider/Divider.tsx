import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
/**
 * ? Local Imports
 */
type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IDividerProps {
  style?: CustomStyleProp;
}

const Divider: React.FC<IDividerProps> = ({ style }) => {
  return <View style={[styles.dividerStyle, style]} />;
};

interface Style {
  dividerStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  dividerStyle: {
    height: 1,
    width: "100%",
    backgroundColor: "#3b3b3b",
  },
});
export default Divider;
