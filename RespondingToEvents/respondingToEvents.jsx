export function AlertButton() {
  function handleClick() {
    alert("You Clicked Me!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handleClick}>Play {movieName}</Button>;
}

function UploadImage() {
  return (
    <Button onClick={() => alert("Uploading Image")}>Uploading Image</Button>
  );
}

export default function ToolBar() {
  return (
    <>
      <UploadImage />
      <PlayButton movieName="Playing Movie!" />
    </>
  );
}
