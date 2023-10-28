import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ expense }) {
  const navigation = useNavigation();

  function onPressItem() {
    navigation.navigate("ManageExpense", { expense: expense });
  }

  return (
    <Pressable onPress={onPressItem}>
      <View style={styles.container}>
        <Text style={styles.text}>{expense.desc}</Text>
        <Text style={styles.text}>{expense.amount}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  text: {
    color: "white",
  },
});
