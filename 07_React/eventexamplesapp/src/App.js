import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  // Multiple Methods
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const incrementValue = () => {
    setCounter(prev => prev + 1);
  };

  const sayHello = () => {
    setMessage('Hello! Incremented the counter.');
  };

  const handleDecrement = () => {
    setCounter(prev => prev - 1);
    setMessage('Decremented the counter.');
  };

  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  const handleClick = () => {
    setMessage('I was clicked');
  };

  const handleSubmit = () => {
    const conversionRate = 0.011; // Example rate
    const result = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuro(result);
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome('Welcome! Glad to see you.')}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>Click Me</button>

      <br /><br />

      <h3>Currency Converter</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert to Euro</button>
      <p>Converted Euro: {euro}</p>

      <hr />
      <p>{message}</p>
    </div>
  );
}

export default App;
