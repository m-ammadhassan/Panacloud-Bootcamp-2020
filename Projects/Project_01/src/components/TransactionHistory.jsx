import React from 'react'
import '../styles/TransactionHistory.css'

const TransactionHistory = () => {
  return (
    <section className='transaction-history-section component-padding'>
      <h2 className='section-title text-center'>Transaction History</h2>

      <div className='transaction-card flex transaction-positive'>
        <h3 className='transaction-title'>Dummy Transaction</h3>
        <span className='transaction-amount'>${100}</span>
        <button className='transaction-remove'>x</button>
      </div>

      <div className='transaction-card flex transaction-negative'>
        <h3 className='transaction-title'>Dummy Transaction</h3>
        <span className='transaction-amount'>${100}</span>
        <button className='transaction-remove'>x</button>
      </div>
    </section>
  )
}

export default TransactionHistory