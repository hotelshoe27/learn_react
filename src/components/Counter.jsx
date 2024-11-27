import React, { useState } from 'react'

const Counter = () => {
    // let cnt = 0;

    const [cnt, setCnt] = useState(0);

    const handleIncrease = () => {
        // cnt += 1;
        setCnt(cnt+1);
    };

    const handleDecrease = () => {
        // cnt -= 1;
        setCnt((prev) => prev - 1);
    };
    
  return (
    <div style={{border: '1px solid red', padding: '8px'}}>
        Counter
        <h1>{cnt}</h1>
        <button type='button' onClick={handleIncrease}>+1</button>
        <button type='button' onClick={handleDecrease}>-1</button>
    </div>
  )
}

export default Counter