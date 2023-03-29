function Button({ message, children }) {
  function handleClick() {
    alert(`Playing ${message}`);
  }
  return <button onClick={handleClick}>{children}</button>;
}

function PlayMovie({ movieName }) {
  return <Button message={movieName}>Playing: {movieName}</Button>;
}
function PlayMusic() {
  return <Button message="music">Playing: music</Button>;
}

export default function Toolbar() {
  return (
    <>
      <PlayMovie movieName="Shaolin Soccer">Play Movie</PlayMovie>
      <PlayMusic>Upload Image</PlayMusic>
    </>
  );
}
