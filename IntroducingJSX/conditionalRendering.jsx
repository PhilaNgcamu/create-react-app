function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✔";
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally's Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space Suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />{" "}
        <Item isPacked={true} name="Photo of Tam" />{" "}
        <Item isPacked={false} name="Nice Suit of Kai" />
      </ul>
    </section>
  );
}
