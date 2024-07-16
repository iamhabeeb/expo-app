import { Dimensions, StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
  centerItems: {
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
