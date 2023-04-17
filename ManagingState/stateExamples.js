import { useState } from "react";

function App() {
  const obj = { count: 0, color: "red" };
  const [object, setObject] = useState(obj);
  function decrementCount() {
    setObject({
      ...object,
      count: object.count - 1,
      color: "YELLOW",
    });
  }
  function incrementCount() {
    setObject({
      ...object,
      count: object.count + 1,
      color: "PURPLE",
    });
  }
  return (
    <>
      <button onClick={decrementCount}> - </button>
      <span> {object.count} </span> <span> {object.color} </span>
      <button onClick={incrementCount}> + </button>
    </>
  );
}

export default App;
