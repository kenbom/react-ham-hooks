import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [devidable, setDevidable] = useState();
  const onClick = () => setCount(count + 1);
  const onClick2 = () => setCount(count - 1);
  const onClick3 = () => setCount((count) => count * 2);
  const onClick4 = () => { count % 3 === 0 ? setDevidable(true) : setDevidable(false) }

  return (
    <div>
      <button onClick={onClick}>increment</button>
      <button onClick={onClick2}>decrement</button>
      <button onClick={onClick3}>double</button>
      <button onClick={onClick4}>/by3</button>
      <p>Counter:{count}</p>
      <p>Devidable?:{devidable ? "Yes" : count}</p>
    </div>
  );
}

export default App;
