import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      const expensesList = await fetchExpenses();
      // setFetchedExpenses(expensesList);
      expensesCtx.setExpenses(expensesList);
    }
    getExpenses();
  }, []);

  return (
    <View>
      <Text>AllExpenses</Text>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        timePeriod="Last 7 Days"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
