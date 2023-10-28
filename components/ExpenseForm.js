import { StyleSheet, View, Button } from "react-native";
import React, { useState } from "react";
import Input from "./manage-expense/Input";

export default function ExpenseForm({
  onConfirm,
  onCancel,
  isEditing,
  defaultValues,
}) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    desc: defaultValues ? defaultValues.desc : "",
  });

  function onInputChanged(inputIdentifier, value) {
    setInputValues((curValues) => {
      return {
        ...curValues,
        [inputIdentifier]: value,
      };
    });
  }

  function confirmHandler() {
    const newExpense = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      desc: inputValues.desc,
    };

    onConfirm(newExpense);
  }

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: onInputChanged.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: onInputChanged.bind(this, "date"),
          value: inputValues.date,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: onInputChanged.bind(this, "desc"),
          value: inputValues.desc,
        }}
      />

      <Button title="Cancel" onPress={onCancel} />
      <Button title={isEditing ? "Edit" : "Add"} onPress={confirmHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
