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

<h1>Writing Markup with JSX</h1>

- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

<h1>The Rules of JSX</h2>

- When converting HTML to JSX there are rules that need to be followed. Reference: [markup.js](markup.js):
  - Wrap the multiple elements/tags in a single parent tags. You may use a fragment, `<></>` or any relevant tag.
  - Close all tags.
  - camelCase almost of the things, such as attributes and props.

<h1>JavaScript in JSX with Curly Braces</h1>

- At some point you will want to add some JavaScript logic and JSX will help you with that.

<h2>Passing strings with quotes</h2>

- Pass a string attribute, where it takes in a string value to JSX, by putting in single/double quotes. Reference: [JavascriptInJsx.js](JavascriptInJsx.js).

- However, you would want to store these string parameters in variables and then pass variables with string attributes, dynamically. Reference: [JavascriptInJsx.js](JavascriptInJsx.js).

<h2>Using curly braces: A window into the JavaScript world</h2>

- You can use any JavaScript logic inside JSX by the use of curly braces (`{}`). Reference: Reference: [JavascriptInJsx.js](JavascriptInJsx.js).

- You can also pass in objects in JSX (`{{...}}`). Reference: [JavascriptInJsx.js](JavascriptInJsx.js).

- You can move JavaScript expressions in object and refernce them in JSX inside curly braces (`{}`). Reference: [JavascriptInJsx.js](JavascriptInJsx.js).

<h1>Passing Props to a Component</h1>

- React components use **props** to pass information to each other.
- Every parent component passes information to its child component by giving them props. Reference: [props.js](props.js).

<h2>Familiar Props</h2>

- You can pass in props in JSX tags. For example, you can pass relevent props in `src`, `alt`, `className` to the `img` tag. Where they are predefined to the tag, according to the HTML standard. Reference: [props.js](props.js).

<h2>Passing props to a component</h2>

- Reference: [props.js](props.js).
- How to pass props to a component:
  - First, pass some props that are JavaScript expressions to a child component.
  - The child component should have the same props as above. Insert them in the parameters of function with `({prop1, prop2})`.

> **Note**
> Pass the props in the parent component then the child component will _adjust_ how the rendered JSX is displayed.

<h2>Passing JSX as children</h2>

- In the same way HTML tags can be nested, the components can be nested as well. For Example:

```
<Card>
  <Avatar />
</Card>
```

- When you nest **content** inside a JSX tag, the parent component will recieve that content in a prop called **children**. For Example, the `Card` component renders the div with the content nested inside it. Reference: [props.js](props.js).

<h1>Conditional Rendering</h1>

- In React you can display different things depending on different conditions. You may use conditionals such as, if-else statements and conditional operators. Therefore, conditionally returning the JSX. Reference: [conditionalRendering.js](conditionalRendering.js).

<h1>Rendering Lists</h1>

- To render multiple components from an array/collection of data, use JavaScript array methods to manipulate an array of data. Reference: [renderingLists.js](renderingLists.js).

<h2>Rendering data from arrays</h2>

- Say that you have a list of content, where the list items show different data:

```
<ul>
  <li>Creola Katherine Johnson: mathematician</li>
  <li>Mario José Molina-Pasquel Henríquez: chemist</li>
  <li>Mohammad Abdus Salam: physicist</li>
  <li>Percy Lavon Julian: chemist</li>
  <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
</ul>
```

- Then in [renderingLists.js](renderingLists.js), store the list items data inside an array.

- In that example, you move the list items in an array. Then use the `map(...)` method to convert each item into JSX expression. Then, render the whole list.
