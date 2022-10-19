import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  
  // console.log(props.title)
  // props={
  //   title:'Hleoo'
  //   onAddExpense: function addExpenseHandler(){
  //     console.log(expense)
  //   }
  // }
  const saveExpenseDataHandler = (enteredExpense) => {
    // props.onAddExpense(expenseData);
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
