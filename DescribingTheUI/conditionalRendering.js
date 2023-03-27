function Item({ children, isPacked }) {
  let itemContent = children;
  if (isPacked) itemContent += " ✔";
  return (
    <li className="item">
      {children}
      {isPacked && " ✔"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true}>Space suit</Item>
        <Item isPacked={true}>Helmet with a golden leaf</Item>
        <Item isPacked={false}>Photo of Tam</Item>
      </ul>
    </section>
  );
}
