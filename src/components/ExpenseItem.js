import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <dev className="expense-item">
      <dev>{props.date.toISOString()}</dev>
      <dev className="expense-item__description">
        <h2>{props.title}</h2>
        <dev className="expense-item__price">${props.amount}</dev>
      </dev>



    </dev>
  )
}

export default ExpenseItem