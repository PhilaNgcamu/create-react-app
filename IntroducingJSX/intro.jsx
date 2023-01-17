const names = "Josh Perez";
const element = <h1>Hello, {names}</h1>; //Hello, Josh Perez

//Embedding JS expressions in JSX
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const h1Element = <h1>Hello, {formatName(user)}</h1>;
