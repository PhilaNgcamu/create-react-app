function Recipe({ drinkers = 2 }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of water and {drinkers / 2} spoons of spice.
      </li>
      <li>Add {drinkers / 2} cups of milk to boil sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <>
      <h1>Spice Chai Recipe</h1>
      <h2>For Two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </>
  );
}
