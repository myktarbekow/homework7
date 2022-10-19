import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

function App() {
  const [newExpenses, setNewExpense] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setNewExpense((prevExpense) => {
      return [...prevExpense, expense];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} title="hello" />
      <Expenses expenses={newExpenses} />
    </div>
  );
}

export default App;
