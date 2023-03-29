export function Button({ message, children }) {
  function handleClick() {
    alert(message);
  }
  return <button onClick={handleClick}>{children}</button>;
}

export default function Toolbar() {
  return (
    <>
      <Button message="Playing!">Play Movie</Button>
      <Button message="Uploading!">Upload Image</Button>
    </>
  );
}
