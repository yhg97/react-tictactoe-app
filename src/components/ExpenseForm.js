import React from 'react'
import './ExpenseForm.css'
import { MdSend } from 'react-icons/md'

const ExpenseForm = () =>{
  return (

     <form>
       <div className='form-center'>
         <div className='form-group'>
          <label htmlFor='charge'>지출 항목</label>
          <input type='text' className='form-control' id='charge' name='charge' placeholder='예) 렌트비'/>
         </div>
         
          <div className='form-group'>

          <label htmlFor='amout'>지출 항목</label>
          <input type='number' className='form-control' id='amout' name='amout' placeholder='예) 100'/>
          </div>

       </div>

       <button type='submit' className='btn'>
          <MdSend className='btn-icon' />

       </button>

     </form>
  )
}

export default ExpenseForm