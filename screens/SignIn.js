import React, { useContext, useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Context from "../context/Context";
import { signIn, signUp } from "../firebase";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signUp");
  const {
    theme: { colors },
  } = useContext(Context);

  async function handlePress() {
    if (mode === "signUp") {
      await signUp(email, password);
    }
    if (mode === "signIn") {
      await signIn(email, password);
    }
  }
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{ color: colors.foreground, fontSize: 24, marginBottom: 20 }}
      >
        Welcome to Whatsapp
      </Text>
      <Image
        source={require("../assets/welcome-img.png")}
        style={{ width: 180, height: 180 }}
        resizeMode="cover"
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            borderBottomColor: colors.primary,
            borderBottomWidth: 2,
            width: 200,
            marginTop: 20,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title={mode === "signUp" ? "Sign Up" : "Sign in"}
            disabled={!password || !email}
            color={colors.secondary}
            onPress={handlePress}
          />
        </View>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() =>
            mode === "signUp" ? setMode("signIn") : setMode("signUp")
          }
        >
          <Text style={{ color: colors.secondaryText }}>
            {mode === "signUp"
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
