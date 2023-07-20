import React from "react";
import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expense = [
    {
      title: "New Desk (Women)",
      amount: 305.78,
      date: new Date(2022, 2, 25),
    },
    {
      title: "Car Insurnce",
      amount: 475.89,
      date: new Date(2022, 2, 24),
    },
    {
      title: "Toilet Papers",
      amount: 456.58,
      date: new Date(2022, 2, 23),
    },
  ];
  return (
    <div>
      <h1>Let's Start</h1>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}/>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}/>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}/>
    </div>
  );
}

export default App;
