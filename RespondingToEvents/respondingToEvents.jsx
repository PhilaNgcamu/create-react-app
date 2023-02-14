export function Button() {
  function handleClick() {
    alert("You Clicked Me!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function ToolBar() {
  return (
    <>
      <AlertButton message="Playing Music!">Play Music</AlertButton>
      <AlertButton message="Playing Movie!">Play Movie</AlertButton>
    </>
  );
}
