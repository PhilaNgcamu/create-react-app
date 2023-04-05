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
