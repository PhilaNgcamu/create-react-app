<h1>Reacting to Input with State</h1>

- React uses a declarative way to manipulate the UI instead of manipulating the UI with different pieces. For example, a form has a submit button that is disabled when there's no text. So, using pure JavaScript, you should make a _command_/line of code responsible for that UI. If the form gets to complex, it will be not wise to focus on have many lines of code because it would be buggy.

- Therefore, React was built to solve the above problem. For example, you declare what you want to show. You don't have to think if the button is enabled or disabled, etc.

<h2>Thinking about UI declaratively</h2>

- Reference: [inputWithState.js](inputWithState.js).

1. **Identify** your component's different visual states
   - First, visualize all the different "states" of the UI the user might see. For example:
   - Empty: Form has disabled "Submit" button.
   - Typing: Form has an enabled "Submit" button.
   - Submitting: Form is completely disabled. Spinner is shown.
   - Success: "Thank you" message is shown instead of a form.
   - Error. Same as Typing state, but with an extra error message.
2. **Determine** what triggers those state changes.
3. **Represent** the state in memory using `useState`.
4. **Remove** any non-essential state variables.
5. **Connect** the event handlers to set the state.
