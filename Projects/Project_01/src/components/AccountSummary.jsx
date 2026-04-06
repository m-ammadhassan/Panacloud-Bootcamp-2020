import React from 'react'
import '../styles/AccountSummary.css'

const AccountSummary = () => {
  return (
    <section className='account-summary-section component-padding text-center'>
      <h2 className='section-title'>Account Summary</h2>
      
      <div className='flex'>
        <div className='income-section'>
          <h3>Income</h3>
          <h4>${100}</h4>
        </div>

        <div className='expense-section'>
          <h3>Expense</h3>
          <h4>${100}</h4>
        </div>
      </div>
    </section>
  )
}

export default AccountSummary