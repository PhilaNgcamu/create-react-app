function Item({ children, isPacked }) {
  if (isPacked) return <li className="item">{children}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true}>Space suit</Item>
      </ul>
    </section>
  );
}
