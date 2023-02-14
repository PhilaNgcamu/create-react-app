export default function Button() {
  function handleClick() {
    alert("You Clicked Me!");
  }
  return <button onclick={handleClick}>Click Me!</button>;
}
