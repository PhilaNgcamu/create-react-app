function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayMovie({ movieName }) {
  function handleClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handleClick}>Playing: {movieName}</Button>;
}
function PlayMusic() {
  function handleClick() {
    alert(`Playing Music`);
  }
  return <Button onClick={handleClick}>Playing Music</Button>;
}

export default function Toolbar() {
  return (
    <>
      <PlayMovie movieName="Shaolin Soccer">Play Movie</PlayMovie>
      <PlayMusic>Upload Image</PlayMusic>
    </>
  );
}
