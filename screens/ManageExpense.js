import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/ui/IconButton";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ExpenseForm";
import { storeExpense } from "../util/http";

export default function ManageExpense({ route, navigation }) {
  const expense = route.params?.expense;
  const isEditing = !!expense;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing, navigation]);

  const expensesCtx = useContext(ExpensesContext);

  function onDeleteExpense() {
    expensesCtx.deleteExpense(expense.id);
    navigation.goBack();
  }

  function onCancel() {
    navigation.goBack();
  }

  function onConfirm(newExpense) {
    if (isEditing) {
    } else {
      expensesCtx.addExpense(newExpense);
      storeExpense(newExpense);
    }
    navigation.goBack();
  }

  return (
    <View>
      <ExpenseForm
        onCancel={onCancel}
        onConfirm={onConfirm}
        isEditing={isEditing}
        defaultValues={expense}
      />

      {isEditing && (
        <IconButton
          color="red"
          size={24}
          icon="trash"
          onPress={onDeleteExpense}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
