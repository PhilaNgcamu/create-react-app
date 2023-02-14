export function AlertButton() {
  function handleClick() {
    alert("You Clicked Me!");
  }
  return <button onClick={handleClick}>Click Me!</button>;
}

function Button({ onPlay, children }) {
  return <button onClick={onPlay}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onPlay={handleClick}>Play {movieName}</Button>;
}

function UploadImage() {
  return (
    <Button onPlay={() => alert("Uploading Image")}>Uploading Image</Button>
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
