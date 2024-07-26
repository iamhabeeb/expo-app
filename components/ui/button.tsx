import React from "react";
import {
  Pressable,
  StyleSheet,
  Platform,
  useColorScheme,
  ViewStyle,
  StyleProp,
  View,
} from "react-native";
import { ActivityIndicator, Text, useTheme } from "react-native-paper";

interface ButtonProps {
  onPress?: () => void;
  title?: string;
  color?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: boolean;
  style?: StyleProp<ViewStyle>;
  badge?: boolean | string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  color,
  icon,
  style,
  badge,
  disabled,
  loading,
  title,
}) => {
  const { colors, dark } = useTheme();

  return (
    <View
      style={{
        borderRadius: 20,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Pressable
        android_ripple={{ color: dark ? "#ddd" : "#009eed" }}
        style={{
          backgroundColor: dark ? "#fff" : "#007eed",
          borderRadius: 20,
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          opacity: loading ? 0.7 : 1,
        }}
        onPress={onPress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" animating={true} />
        ) : title ? (
          <Text variant="titleSmall" style={{ color: dark ? "#000" : "#fff" }}>
            {title}
          </Text>
        ) : null}
        {children}
      </Pressable>
    </View>
  );
};

export default Button;
