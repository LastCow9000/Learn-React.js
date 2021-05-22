import { useReducer, useState } from 'react';

export default function Counter() {
  
  const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.INCREMENT:
        return { count: state.count + 1 }
      case ACTION.DECREMENT:
        return { count: state.count - 1}
      default:
        return state
      };
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  function increment() {
    dispatch({ type: ACTION.INCREMENT })
  }

  function decrement() {
    dispatch({ type: ACTION.DECREMENT })
  }
  
  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
    </>
  );

  /*
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </>
  );
  */
}