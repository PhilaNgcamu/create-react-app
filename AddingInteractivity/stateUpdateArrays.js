import { useState } from "react";

export function List() {
  let initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];
  let nextId = initialArtists.length;

  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);
  function handleClick() {
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />{" "}
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist, i) => {
          return <li key={i}>{artist.name}</li>;
        })}
      </ul>
    </>
  );
}

export function ShapeEditor() {
  let initialShapes = [
    { id: 0, type: "circle", x: 50, y: 100 },
    { id: 1, type: "square", x: 150, y: 100 },
    { id: 2, type: "circle", x: 250, y: 100 },
  ];
  const [shapes, setShapes] = useState(initialShapes);
  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") return shape;
      else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }
  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}

const initialCounters = [0, 0, 0];

export function CounterList() {
  const [counters, setCounters] = useState(initialCounters);
  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) return c + 1;
      else {
        return c;
      }
    });
    setCounters(nextCounters);
  }
  return (
    <ul>
      {counters.map((counter, i) => {
        return (
          <li key={i}>
            {counter}{" "}
            <button
              onClick={() => {
                handleIncrementClick(i);
              }}
            >
              +1
            </button>
          </li>
        );
      })}
    </ul>
  );
}
