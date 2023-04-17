import { useState } from "react";

function App() {
  const obj = { count: 0, color: "red" };
  const [count, setCount] = useState(obj);
  function decrementCount() {
    setCount((c) => c - 1);
  }
  function incrementCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <button onClick={decrementCount}> - </button>
      <span> {count} </span> a<button onClick={incrementCount}> + </button>
    </>
  );
}

export default App;
