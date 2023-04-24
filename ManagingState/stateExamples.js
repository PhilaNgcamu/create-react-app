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
    buttonState.map((button) => {
      if(button.key === index) {
        return {...button, countcount++}
      }
      return button;
    });
    setNumber((increaseNumber += 1));
  }

  return (
    <>
      <ul>
        {buttons.map((button) => {
          return (
            <li key={button.key}>
              <button onClick={() =>{handleIncreaseButton(button.key)}}>
                {button.label} {increaseNumber}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
