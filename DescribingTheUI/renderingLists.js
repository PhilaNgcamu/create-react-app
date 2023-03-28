const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

const people2 = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export default function List() {
  const chemists = people2.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((chemist) => <li>{chemist.name}</li>);
  return <ul>{listItems}</ul>;
}
