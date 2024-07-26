import React, { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
} from "react-native";

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
}) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const animatedValue = new Animated.Value(value ? 1 : 0);

  useEffect(() => {
    setIsEnabled(value);
  }, [value]);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    Animated.timing(animatedValue, {
      toValue: !isEnabled ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onValueChange(!isEnabled);
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 26], // Adjust for the width of the switch
  });

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View style={styles.container}>
        <Animated.View style={[styles.switch, { transform: [{ translateX }] }]}>
          <Text style={styles.thumbText}>{isEnabled ? "ON" : "OFF"}</Text>
        </Animated.View>
        <View
          style={[styles.track, isEnabled ? styles.trackOn : styles.trackOff]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    position: "relative",
    padding: 5,
  },
  track: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 17,
    backgroundColor: "#ccc",
  },
  trackOn: {
    backgroundColor: "#4cd964", // iOS green color
  },
  trackOff: {
    backgroundColor: "#ccc",
  },
  switch: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbText: {
    fontSize: 10,
    color: "#000",
    fontWeight: "bold",
  },
});

export default CustomSwitch;
