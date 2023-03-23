export default function Avatar() {
  const className = "avatar";
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className={className} src={avatar} alt={description} />;
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export function TodoList() {
  const name = "Philasande Ngcamu";
  return <h1>{formatDate(today)}'s To Do List</h1>;
}

const person = {
  name: "Philasande Happy Ngcamu",
  theme: {
    backgroundColor: "black",
    color: "yellow",
  },
  baseUrl: "https://i.imgur.com/",
  imageUrl: "7vQD0fPs.jpg",
  className: "avatar",
};

function getImage() {
  return person.baseUrl + person.imageUrl;
}

export function TodoList() {
  return (
    <>
      <h1>{person.name}'s Todo List:</h1>
      <img className={person.className} src={getImage()} alt={person.name} />
      <ol style={person.theme}>
        <li>Clean.</li>
        <li>Cook.</li>
        <li>Study.</li>
      </ol>
    </>
  );
}
