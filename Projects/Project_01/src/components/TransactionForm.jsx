import React from 'react'
import '../styles/TransactionForm.css'

const TransactionForm = () => {
  return (
    <section className='transaction-form-section component-padding'>
      <h2 className='section-title text-center'>Add New Transaction</h2>
      <div>
        <form action="">
          <div className='form-control'>
            <label htmlFor="" className='form-label'><h3>Description</h3></label>
            <input type="text" className='form-field' />
          </div>

          <div className='form-control'>
            <label htmlFor="" className='form-label'><h3>Amount</h3></label>
            <input type="number" name="" id="" className='form-field' />
          </div>

          <div className='form-control'>
            <label htmlFor="" className='form-label'><h3>Type</h3></label>
            <select name="" id="" className='form-field'>
              <option value="">Income</option>
              <option value="">Expense</option>
            </select>
          </div>

          <div>
            <button className='button'>Add Transaction</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TransactionForm