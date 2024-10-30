import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete , initialExpense}) => {
    console.log(initialExpense)

  return(

      <>
        <ul className='list'>
          {}
          {initialExpense.map(expense => {
            return(
              <ExpenseItem
              expense={expense}
              key={expense.id}
              handleDelete={handleDelete}
              />
            )
          })}
        </ul>
        <button className='btn'>
          <MdDelete className='btn-icon'/>
          목록 지우기
        </button>

      </>
  )
}

export default ExpenseList