export function AlertButton() {
  function handleClick() {
    alert("You Clicked Me!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

function Button({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function ToolBar() {
  return (
    <>
      <Button message="Playing Music!">Play Music</Button>
      <Button message="Playing Movie!">Play Movie</Button>
    </>
  );
}
