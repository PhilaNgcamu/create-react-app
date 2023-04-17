import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function decrementCount() {
    setCount((c) => c - 1);
  }
  function incrementCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <button onClick={decrementCount}> - </button>
      <span> {count} </span>
      <button onClick={incrementCount}> + </button>
    </>
  );
}

export default App;
