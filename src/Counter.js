import React from 'react';

function Counter() {
  const onIncrease = () => {
    alert("+1");
  }
  const onDecrease = () => {
    alert("-1");
  }
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;