import { useState } from "react";

function App() {
  const buttons = [
    {
      key: 1,
      label: "First Button",
      count: 0,
    },
    {
      key: 2,
      label: "Second Button",
      count: 0,
    },
    {
      key: 3,
      label: "Third Button",
      count: 0,
    },
  ];
  const [buttonState, setButtonState] = useState(buttons);

  function handleIncreaseButton(index) {
    const newStateButton = buttonState.map((button) => {
      if (button.key === index) {
        return { ...button, count: button.count + 1 };
      }
      return button;
    });
    setButtonState(newStateButton);
  }

  return (
    <>
      <ul>
        {buttonState.map((button) => {
          return (
            <li key={button.key}>
              <button
                onClick={() => {
                  handleIncreaseButton(button.key);
                }}
              >
                {button.label} {button.count}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    username: "Philasande",
    email: "Phila@gmail.com",
    images: [],
  });
  function handleChangeUser() {
    setUser((obj) => ({
      ...obj,
      username: input,
    }));
  }
  return (
    <>
      <h2>User:</h2>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <br />
      <br />
      <button onClick={handleChangeUser}>Change Username</button>
      <br />
      <br />
      <span>Username is {user.username}</span>
    </>
  );
}

export default App;
