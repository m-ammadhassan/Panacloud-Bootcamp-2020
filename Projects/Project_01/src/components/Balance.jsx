import React from 'react'
import '../styles/Balance.css'

const Balance = () => {
  return (
    <section className='balance-section component-padding text-center'>
      <h2 className='section-title'>Current Balance</h2>
      <h3 className='balance-amount'>${100}</h3>
    </section>
  )
}

export default Balance