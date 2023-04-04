<h1>Responding to Events</h1>

- React allows you to add event handlers to JSX.
- Event handlers are functions triggered in response to interactivity, such as cliking, etc.

<h2>Adding event handlers</h2>

- They are declared inside a component and the have access to its props.

- Reference: [repsondingToEvents.js](repsondingToEvents.js).

1. Define a function/component named `Button`.
2. Then, render the JSX of the button tag.
3. Inside the function define a function named `handleClick`, which would serve a callback for the button tag.
4. Inside the button tag, declare the onClick attribute that accepts the `handleClick` function.
5. Inside it declare the function, `alert('You clicked me!')`.

> **Note**:
> You may often need to have different functions/components for different button, where each function has its own event handler.
> You can also name your event handler prop.

<h1>State: A Component's Memory</h1>

- To update a component with the new data, two things should happen:

  - I.e. use the React's **useState** Hook.

  1. Retain the data when rendering the component. Use a state variable.
  2. Trigger React to render the component with new data. Use a state setter function.
  3. A component can have multiple state variables.

<h1>State as a Snapshot</h1>

- Rendering means that React is calling the component. The returned JSX is a snapshot (interactive) that updates the DOM by the use of the state when it renders.
  > **Note**:
  > A state variable’s value never changes within a render, even if its event handler’s code is asynchronous.

<h1>Queueing a Series of State Updates</h1>

- You can update the state while rendering by passing a an update function that calculates the next state based on the previous one in the queue. For, example, `setNumber(n => n + 1)`. Reference: [stateUpdate.js](stateUpdate.js)
