import React from 'react'

const TransactionForm = () => {
  return (
    <section className='transaction-form-section'>
      <h3>Add New Transaction</h3>
      <div>
        <form action="">
          <div>
            <label htmlFor=""><h4>Description</h4></label>
            <input type="text" />
          </div>

          <div>
            <label htmlFor=""><h4>Ammount</h4></label>
            <input type="number" name="" id="" />
          </div>

          <div>
            <label htmlFor=""><h4>Type</h4></label>
            <select name="" id="">
              <option value="">Income</option>
              <option value="">Expense</option>
            </select>
          </div>

          <div>
            <button>Add Transaction</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TransactionForm