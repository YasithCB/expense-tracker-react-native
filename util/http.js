import axios from "axios";

const baseUrl = "https://react-native-begin-default-rtdb.firebaseio.com/";

export function storeExpense(expense) {
  axios.post(baseUrl + "expenses.json", expense);
}

export async function fetchExpenses() {
  const resp = await axios.get(baseUrl + "expenses.json");

  const expenses = [];

  for (const key in resp.data) {
    const expenseObj = {
      id: key,
      amount: resp.data[key].amount,
      date: new Date(resp.data[key].date),
      desc: resp.data[key].desc,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
