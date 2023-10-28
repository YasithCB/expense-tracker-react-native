import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpenseItem from "./manage-expense/ExpenseItem";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

export default function ExpensesOutput({ timePeriod, expenses }) {
  const navigation = useNavigation();

  const expensesSum = 0;
  // const expensesSum = expenses.reduce((sum, expense) => {
  //   return sum + expense.amount;
  // }, 0);

  return (
    <View>
      <View>
        <Text>{timePeriod}</Text>
        <Text>{expensesSum.toFixed(2)} LKR</Text>
      </View>

      <FlatList
        data={expenses}
        renderItem={({ item }) => {
          return <ExpenseItem expense={item} />;
        }}
        keyExtractor={(item) => item.id}
      />

      <Button
        title="Add New Expense"
        color={GlobalStyles.colors.primary400}
        onPress={() => {
          navigation.navigate("ManageExpense");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
