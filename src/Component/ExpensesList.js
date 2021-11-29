import React from 'react'
import Expenses from './Expenses'

function ExpensesList(props) {
    return (
        <div>
            {props.expenses.map((expense)=>{
                return (
                    <Expenses 
                    expense={expense}
                    key={expense.id}
                    />
                )
            })}
        </div>
    )
}

export default ExpensesList
