import React from 'react'
import Balance from './Balance'
import AccountSummary from './AccountSummary'
import TransactionHistory from './TransactionHistory'
import TransactionForm from './TransactionForm'

const Main = () => {
  return (
    <main className='app-body'>
        <div>
            <Balance />
            <AccountSummary />
        </div>
        <div>
            <TransactionHistory />
        </div>
        <div>
            <TransactionForm />
        </div>
    </main>
  )
}

export default Main