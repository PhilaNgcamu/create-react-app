function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export function Toolbar({ onPlayMusic, onPlayMovie }) {
  return (
    <>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onPlayMusic}>Play Music</Button>
    </>
  );
}

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Play Movie!")}
      onPlayMusic={() => alert("Play Music")}
    />
  );
}
