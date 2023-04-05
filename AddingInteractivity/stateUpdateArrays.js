import { useState } from "react";

export default function List() {
  let initialArtists = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];

  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <ul>
        {artists.map((artist) => {
          return (
            <>
              <li key={artist.id}>
                {artist.name}{" "}
                <button
                  onClick={() => {
                    setArtists(
                      artists.filter((art) => {
                        console.log(art.id, artist.id);
                        return art.id !== artist.id;
                      })
                    );
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
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
