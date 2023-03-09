import React, { useState } from 'react'
import { handlePayment } from './PaystackInterface';

const PaymentForm = () => {

    const [data, setData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment(data.email, parseFloat(data.amount))
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='form-area'>
      <h1>PayStack Integration</h1>
      <form onSubmit={handleSubmit} >
        <div className='input-control'>
            <label>Email</label>
            <input type="email" required name="email" onChange={handleChange} />
        </div>

        <div className='input-control'>
            <label>Amount</label>
            <input type="number" required name="amount" onChange={handleChange} />
        </div>
        <button type='submit'>PAY</button>
      </form>
    </div>
  )
}

export default PaymentForm
