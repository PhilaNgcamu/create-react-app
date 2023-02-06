const people = ["Philasande", "Happy", "Samkelo", "Busisiwe", "Ntokozo"];

export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return listItems;
}
