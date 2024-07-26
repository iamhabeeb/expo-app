import {
  TextInput,
  Button,
  View,
  Pressable,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import {
  isClerkAPIResponseError,
  useSession,
  useSignIn,
} from "@clerk/clerk-expo";
import { Link, Redirect, useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import {
  ActivityIndicator,
  Snackbar,
  Text,
  useTheme,
} from "react-native-paper";
import { Asterisk } from "lucide-react-native";
import React, { useCallback, useEffect, useState } from "react";
import AsteriskIcon from "@/components/asterisk";

export default function LoginScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const { colors, dark } = useTheme();
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { isSignedIn } = useSession();

  // Redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      router.navigate("/");
    }
  }, [isSignedIn, router]);

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        return router.navigate("/");
      } else {
        Alert.alert(
          "Login Error",
          "Unable to log in. Please check your credentials."
        );
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));

      if (isClerkAPIResponseError(err)) {
        setShowSnackBar(true);

        err.errors.map((e) => {
          Alert.alert("", e.message, undefined, { cancelable: true });
        });
      }
    } finally {
      setLoading(false);
    }
  }, [isLoaded, emailAddress, password]);

  const onDismissSnackBar = () => setShowSnackBar(false);

  return (
    <KeyboardAvoidingView>
      <View>
        <Snackbar
          visible={showSnackBar}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Okay",
            onPress: () => {
              // Do something
            },
          }}
        >
          <Text>{snackbarMessage}</Text>
        </Snackbar>
        <View
          style={{
            minHeight: Dimensions.get("window").height,
            backgroundColor: dark ? "#000" : "#fff",
          }}
        >
          <AsteriskIcon />
          <ThemedView
            style={{
              gap: 12,
              padding: 16,
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                borderRadius: 20,
                overflow: "hidden",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                android_ripple={{
                  color: dark ? "#ddd" : "#EDF1FF",
                }}
                style={{
                  backgroundColor: dark ? "#fff" : "#EDF1FF",
                  borderRadius: 20,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  borderWidth: 1,
                  borderColor: "#BCC6E0",
                  overflow: "hidden",
                  height: 50,
                }}
                onPress={() => router.navigate("/register")}
              >
                <Image
                  source={require("@/assets/images/google.png")}
                  width={30}
                  height={30}
                  style={{ width: 30, height: 30, borderRadius: 100 }}
                />
                <Text
                  variant="titleSmall"
                  style={{ color: dark ? "#000" : "#333" }}
                >
                  Sign in with Google
                </Text>
              </Pressable>
            </View>
            <Text style={{ marginVertical: 16, textAlign: "center" }}>Or</Text>
            <View style={{ gap: 12 }}>
              <TextInput
                style={{
                  overflow: "hidden",
                  paddingHorizontal: 24,
                  height: 52,
                  borderWidth: 0.3,
                  borderColor: "#ccc",
                  borderRadius: 10,
                }}
                autoCapitalize="none"
                cursorColor={dark ? "#fff" : "#000"}
                importantForAutofill="yes"
                autoComplete="email"
                value={emailAddress}
                enterKeyHint="next"
                placeholder="you@mail.com"
                keyboardType="email-address"
                onChangeText={setEmailAddress}
              />
              <TextInput
                style={{
                  overflow: "hidden",
                  paddingHorizontal: 24,
                  height: 52,
                  borderWidth: 0.3,
                  borderColor: "#ccc",
                  borderRadius: 10,
                }}
                autoComplete="password"
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                enterKeyHint="send"
                onChangeText={setPassword}
              />
              <View
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  android_ripple={{
                    color: dark ? "#ddd" : "#007eed",
                  }}
                  style={{
                    backgroundColor: dark ? "#fff" : "#007eed",
                    borderRadius: 20,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    overflow: "hidden",
                    height: 50,
                    opacity: loading ? 0.7 : 1,
                  }}
                  onPress={onSignInPress}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator
                      hidesWhenStopped
                      color="#fff"
                      animating={true}
                    />
                  ) : null}
                  <Text
                    variant="titleSmall"
                    style={{ color: dark ? "#000" : "#fff" }}
                  >
                    Log In
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                borderRadius: 20,
                overflow: "hidden",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-end",
                marginTop: 20,
              }}
            >
              <Pressable
                android_ripple={{
                  color: dark ? "#333" : "#ddd",
                }}
                style={{
                  backgroundColor: dark ? "#000" : "#fff",
                  borderRadius: 20,
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 50,
                  borderWidth: 1,
                  borderColor: dark ? "#333" : "#EDF1FF",
                }}
                onPress={() => router.navigate("/register")}
                disabled={loading}
              >
                <Text
                  variant="titleSmall"
                  style={{ color: dark ? "#fff" : "#000" }}
                >
                  Don't have an account? Sign up
                </Text>
              </Pressable>
            </View>
          </ThemedView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
