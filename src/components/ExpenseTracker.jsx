import React, { useState } from "react";
import "./ExpenseTracker.css";

function ExpenseTracker() {
  const [expenseValue, setExpenseValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = (e) => {
    if (!expenseValue.trim() || !amountValue.trim()) return;

    const newExpense = {
      expense: expenseValue,
      amount: parseFloat(amountValue),
    };

    setExpenses([...expenses, newExpense]);

    setExpenseValue("");
    setAmountValue("");
  };
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <form id="expense-form">
        <label htmlFor="expense">Expense:</label>
        <input
          type="text"
          id="expense"
          value={expenseValue}
          placeholder="Enter expense"
          required
          onChange={(e) => setExpenseValue(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amountValue}
          placeholder="Enter amount"
          required
          onChange={(e) => setAmountValue(e.target.value)}
        />
        <button type="button" onClick={addExpense}>
          Add Expense
        </button>
      </form>
      <ul id="expenses-list">
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.expense}</span>
            <span>{expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3>
        Total Expenses: $
        {expenses
          .reduce((totol, expense) => totol + expense.amount, 0)
          .toFixed(2)}
      </h3>
    </div>
  );
}

export default ExpenseTracker;

//
