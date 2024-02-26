import React, { useState } from 'react';
import "../styles/calculate-price.css"

const CalculatePrice = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (name, price) => {
    const newItem = { name, price };
    setItems([...items, newItem]);
    setTotalPrice(totalPrice + price);
  };

  return (
    <div className='breakdown-container'>
      <h2>Your chosen order list </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: Rs. {totalPrice}</p>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CalculatePrice;
