<h1>Responding to Events</h1>

- React allows you to add event handlers to JSX.
- Event handlers are functions triggered in response to interactivity, such as cliking, etc.

<h2>Adding event handlers</h2>

- They are declared inside a component and the have access to its props.

- Reference: [repsondingToEvents.js](repsondingToEvents.js)

1. Define a function/component named `Button`.
2. Then, render the JSX of the button tag.
3. Inside the function define a function named `handleClick`, which would serve a callback for the button tag.
4. Inside the button tag, declare the onClick attribute that accepts the `handleClick` function.
5. Inside it declare the function, `alert('You clicked me!')`.

> **Note:**
> You may often need to have different functions/components for different button, where each function has its own event handler.
