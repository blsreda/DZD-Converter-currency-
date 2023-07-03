import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [amount, setAmount] = useState('');
  const exchangeRates = {
    USD: 190,
    EUR: 215
  };

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const convertToDZD = () => {
    if (!amount) {
      return '';
    }
    const dzdAmount = parseFloat(amount) * exchangeRates[currency];
    return dzdAmount.toFixed(2);
  };

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === 'USD' ? 'EUR' : 'USD'));
    setAmount('');
  };

  return (
    <div>
      <div className="title">
        <h1>{currency} to DZD Converter</h1>
      </div>

      <div className="firstbox">
        <label htmlFor="amountInput">Enter {currency} amount: </label>
        <input type="number" id="amountInput" value={amount} onChange={handleInputChange} />
      </div>

      <div className="dzdres">
        <p>Equivalent amount in DZD:</p>
        <p2>{convertToDZD()} DZD</p2>
      </div>

      <div className="btn">
        <button onClick={toggleCurrency}>
          Toggle Currency to {currency === 'USD' ? 'EUR' : 'USD'}
        </button>
      </div>

      <p className="rate">Exchange rate: 1 {currency} = {exchangeRates[currency]} DZD</p>
    </div>
  );
};

export default App;
