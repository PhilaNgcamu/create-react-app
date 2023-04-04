import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  function updateNumber() {
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
    setNumber((n) => n + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={updateNumber}>+3</button>
    </>
  );
}
