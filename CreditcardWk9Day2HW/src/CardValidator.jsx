import React, { useState, useEffect } from 'react';
import './App.css'; // 

const CardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    // This is the Luhn Algorithm validator function
    const validCard = (number) => {
      
      return number.length === 16;
    };

    
    setIsValid(validCard(cardNumber));
  }, [cardNumber]);

  return (
    <div>
      <h1>Credit Card Validator</h1>
      <input
        type="text"
        placeholder="Enter credit card number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      {isValid !== null && (
        <p className={isValid ? 'valid' : 'invalid'}>
          {isValid ? 'Card is valid' : 'Card is not valid'}
        </p>
      )}
    </div>
  );
};

export default CardValidator;
