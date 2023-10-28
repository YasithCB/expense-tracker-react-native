import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ desc, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  editExpense: (id, { desc, amount, date }) => {},
});

const DUMMY_EXPENSES_LIST = [
  {
    id: "1",
    desc: "This is a dummy item.",
    amount: 54.32,
    date: "2023-08-04", // ISO string representation
  },
  {
    id: "2",
    desc: "This is another dummy item.",
    amount: 34.56,
    date: "2022-09-05", // ISO string representation
  },
  {
    id: "3",
    desc: "And yet another dummy item.",
    amount: 78.9,
    date: "2021-10-06", // ISO string representation
  },
];

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);

    case "EDIT":
      const updatableIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableIndex] = updatedItem;
      return updatedExpenses;

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(
    expenseReducer,
    DUMMY_EXPENSES_LIST
  );

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpense(expenses) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: { id } });
  }

  function editExpense(id, expenseData) {
    dispatch({ type: "EDIT", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    editExpense: editExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
