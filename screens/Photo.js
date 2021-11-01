import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { pickImage } from "../utils";

export default function Photo() {
  const navigation = useNavigation();
  const [cancelled, setCancelled] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const result = await pickImage();
      navigation.navigate("contacts", { image: result });
      if (result.cancelled) {
        setCancelled(true);
        setTimeout(() => navigation.navigate("chats"), 100);
      }
    });
    return () => unsubscribe()
  }, [navigation, cancelled]);
  return <View />;
}
