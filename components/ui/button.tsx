import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  Platform,
  useColorScheme,
  ViewStyle,
  StyleProp,
  View,
} from "react-native";

interface ButtonProps {
  onPress?: () => void;
  title?: string;
  color?: string;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: boolean;
  style?: StyleProp<ViewStyle>;
  badge?: boolean | string;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  color,
  disabled,
  icon,
  style,
  badge,
}) => {
  const theme = useColorScheme();

  const renderBadge = () => {
    if (!badge) return null;

    return (
      <View style={[styles.badgeContainer]}>
        {typeof badge === "string" && badge !== "" ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        ) : (
          <View style={styles.badgeDot} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: color || "",
            paddingVertical: icon ? 12 : 14,
            paddingHorizontal: icon ? 12 : 20,
            borderRadius: icon ? 100 : 14,
          },
          Platform.OS === "ios" && pressed && styles.iosPressed,
          disabled && styles.disabled,
          style,
        ]}
        android_ripple={{
          color: theme === "dark" ? "#1E2026" : "#E9ECF8",
        }}
      >
        {children}
      </Pressable>
      {renderBadge()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  iosPressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: Platform.OS === "ios" ? "600" : "500",
  },
  disabledText: {
    color:
      Platform.OS === "ios"
        ? "rgba(255, 255, 255, 0.5)"
        : "rgba(255, 255, 255, 0.32)",
  },
  badgeContainer: {
    minHeight: 6,
    minWidth: 6,
    position: "absolute",
    top: 7,
    right: 7,
  },
  badge: {
    minWidth: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    paddingHorizontal: 4,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "red",
  },
});

export default Button;
