import React, { useState } from "react";
import "./ExpenseForm.css";
const defaultValues = {
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
};
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(defaultValues);
  const changeValuesHandler = (key) => {
    return (e) => {
      setUserInput((prevState) => {
        return {
          ...prevState,
          [key]: e.target.value,
        };
      });
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    const isFormNotFilled = Object.values(userInput).some((value) => !value);
    if (isFormNotFilled) {
      return alert("please , fill all fiealds!");
    }
    props.onSaveExpenseData(expenseData);
    setUserInput(defaultValues);
    // console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>

          <input
            onChange={changeValuesHandler("enteredTitle")}
            value={userInput.enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            onChange={changeValuesHandler("enteredAmount")}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={changeValuesHandler("enteredDate")}
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2025-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
