import { StyleSheet, SafeAreaView, Button } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { extendedClient } from "@/db";

export default function HomeScreen() {
  const createUser = () => {
    const newUser = {
      name: "Ableez",
      email: "ableez@mail.com",
    };

    extendedClient.user.create({
      data: newUser,
    });
  };
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView>
        <ThemedText>Hello Ableez</ThemedText>
        <Button title="Create User" onPress={createUser} />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
