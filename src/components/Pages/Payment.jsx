import React, { useState } from 'react';
import './Payment.css';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="payment-page">
      <div className="payment-options">
        <h2>Payment Options</h2>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="card"
              checked={selectedOption === 'card'}
              onChange={handleOptionChange}
            />
            Card
          </label>
        </div>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="cod"
              checked={selectedOption === 'cod'}
              onChange={handleOptionChange}
            />
            Cash on Delivery
          </label>
        </div>
        <div className="payment-option">
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="upi"
              checked={selectedOption === 'upi'}
              onChange={handleOptionChange}
            />
            UPI
          </label>
        </div>
        {selectedOption && (
        <div className="payment-details">
          <h2>Payment Details</h2>
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" />

          {selectedOption === 'card' && (
            <>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="text" id="expiryDate" />

              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" />

              <label htmlFor="name">Cardholder's Name</label>
              <input type="text" id="name" />
            </>
          )}

          {selectedOption === 'upi' && (
            <>
              <label htmlFor="upiId">UPI ID</label>
              <input type="text" id="upiId" />
            </>
          )}
        </div>
      )}
      </div>
      <div className="price-details">
        <h2>Price Details</h2>
        <p>Item Price: $10</p>
        <p>Shipping Cost: $5</p>
        <p>Total Price: $15</p>
      </div>
     
    </div>
  );
};

export default PaymentPage;
