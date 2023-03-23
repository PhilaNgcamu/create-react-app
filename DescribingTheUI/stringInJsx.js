export default function Avatar() {
  const className = "avatar";
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className={className} src={avatar} alt={description} />;
}

export function TodoList() {
  const name = "Philasande Ngcamu";
  return <h1>{name}'s To Do List</h1>;
}
