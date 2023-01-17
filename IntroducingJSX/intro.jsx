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

//Using JSX as an expression
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

//Specifying Attributes with JSX
const aElement = <a href="https://www.reactjs.org">link</a>;
//Or
const imgElement = <img src={user.avatarUrl} />;

//Specifying Children with JSX
const childElement = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here</h2>
  </div>
);

//JSX prevents Injection Attacks
const title = response.potentiallyMaliciousInput;
//This is safe:
const safer = <h1>{title}</h1>;

//JSX represents objects
const createElement = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
); //this is equivalent to const createElement = (<h1 className="greeting">Hello, world!</h1>)
