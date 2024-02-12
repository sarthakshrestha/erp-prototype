import React, { useState } from 'react';
import "../styles/token-checker.css"

function TokenOrder() {
  const [token, setToken] = useState('');
 

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  

  return (
    <div className='token-checker'>
    <h1>Check Order Status</h1>
      <input type="text" value={token} onChange={handleTokenChange} />
      <button>Check Order</button>
    </div>
  );
}

export default TokenOrder;
