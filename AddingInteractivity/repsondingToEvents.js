export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }
  return <button onClick={handleClick}>This is a button</button>;
}
