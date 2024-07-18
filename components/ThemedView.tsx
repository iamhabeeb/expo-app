import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { useTheme } from "react-native-paper";

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const { colors } = useTheme();

  return <View style={[{}, style]} {...otherProps} />;
}
