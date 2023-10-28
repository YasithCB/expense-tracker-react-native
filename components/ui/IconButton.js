import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Ionicons name={icon} size={size} color={color} />
        <Text style={{ color: "white" }}>Add</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
