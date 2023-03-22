<h1>Your First Component</h1>

- **Components** are the foundational building blocks in when building the UI in React.
- Components are building blocks of UI
- Lets define a component. Reference: [components.js](components.js).

<h2>Define A Component</h2>

- To define a component, declare a function name with the capital letter then return the JSX expression (which is the extension syntax of JavaScript for React). Reference: [components.js](components.js).

<h2>Using A Component</h2>

- Lets nest the defined component in another component to be exported with `export default` keywords to show the rendered content. Reference: [components.js](components.js).
- The browser sees what the component is returning/rendering, i.e. it recognises the HTML tags and its content. Reference: [components.js](components.js).
- The parent component **Gallery** renders the child component, **Profile** 3 times. Reference: [components.js](components.js).

> **Warning**
> Never define a component inside a component beacuse the component would be slow and buggy. Rather, define it independantly (top level).

<h1>Importing and Exporting Components</h1>

- Components are meant to be reused inside components. If there more componets in the file, you might want to place them in a separate file to be exported from there to be reused in other files.
- You may need to create a new JS file, [profile.js](profile.js). Then export the component defined in that file to be use in [components.js](components.js) to be rendered there.
